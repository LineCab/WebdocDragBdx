<script lang="ts">
    import { scenarios } from "$lib/scripts/scenario";
    import { scenariosEn } from "$lib/scripts/scenarioEn";
    import { scenariosEs } from "$lib/scripts/scenarioEs";
    import { onMount } from "svelte";
    import { tick } from "svelte";
    import { langue } from "$lib/stores/langueStore";
    import { messagePv } from "$lib/stores/mpStore";


    import Layout from './layout.svelte';
    import '$lib/styles/style.css';
    import BulleTexteBlanc from '$lib/composents/BulleTexteBlanc.svelte';
    import BulleTexteVert from '$lib/composents/BulleTexteVert.svelte';
    import BtnChoix from '$lib/composents/BtnChoix.svelte';
    import BarreEnvoie from "$lib/composents/BarreEnvoie.svelte";
    import BulleMedia from "$lib/composents/BulleMedia.svelte";
    import BulleAudio from "$lib/composents/BulleAudio.svelte";

    type Message = {
        type: "texteVert" | "texteBlanc" | "mediaBlanc" | "audioBlanc";
        text: string;
        heure: string;
        src: string;
        pseudo?: string;
        mp?: string;
        img?: string;
        video?: string;
        mediaType?: "video" | "photo";
        transcription?: string;
    };

    type Response = {
        text: string;
        next: string;
    };

    let currentScenario: string = "start";
    let messages: Message[] = [];
    let responses: Response[] = [];
    let isLoading = true;
    let isAccueilVisible: boolean;

    if (typeof window !== "undefined") {
        isAccueilVisible = localStorage.getItem("isAccueilVisible") !== "false";
    }

    function startApp() {
        const accueilElement = document.querySelector('.accueil');
        if (accueilElement) {
            accueilElement.classList.add('hide');
            setTimeout(() => {
                isAccueilVisible = false;
                localStorage.setItem("isAccueilVisible", "false");
            }, 500);
        }
    }

    function saveProgress() {
        localStorage.setItem("currentScenario", currentScenario);
        localStorage.setItem("messages", JSON.stringify(messages));
    }

    function messagePrive(newMp: string) {
        messagePv.set(newMp);
    }

    function loadProgress() {
        const savedScenario = localStorage.getItem("currentScenario");
        const savedMessages = localStorage.getItem("messages");

        if (savedScenario) {
            currentScenario = savedScenario;
        }

        if (savedMessages) {
            messages = JSON.parse(savedMessages);
        }
    }

    async function loadScenario(scenarioKey: string, langue: string) {
        let scenario;

        switch (langue) {
            case "en":
                scenario = scenariosEn[scenarioKey];
                break;
            case "es":
                scenario = scenariosEs[scenarioKey];
                break;
            case "fr":
            default:
                scenario = scenarios[scenarioKey];
                break;
        }

        if (!scenario) return;

        isLoading = true;
        currentScenario = scenarioKey;
        responses = [...scenario.responses];
        
        saveProgress();

        for (const msg of scenario.messages) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (msg.mp) {
                messagePrive(msg.mp);
            }


            messages = [
                ...messages,
                { 
                    ...msg, 
                    heure: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                }
            ];
            
            scrollElement();
        }

        setTimeout(() => {isLoading = false;}, 800);

    }

    function handleResponse(response: Response) {
        if (isLoading) return;
        
        saveProgress();
            
        messages = [
            ...messages,
            {
                type: "texteVert",
                text: response.text,
                heure: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                src: "/images/DSC_0068.png"
            }

        ];

        scrollElement();

        loadScenario(response.next, $langue);
    }

    function onReset() {
        localStorage.removeItem("currentScenario");
        localStorage.removeItem("messages");

        currentScenario = "start";
        messages = [];
        responses = [];

        messagePv.set("reinitialiser");

        localStorage.setItem("notifOrlaneDisplayed", "false");
        localStorage.setItem("conversationOrlaneAffichee", "false");
        localStorage.setItem("notifBergamoteDisplayed", "false");
        localStorage.setItem("conversationBergamoteAffichee", "false");

        loadScenario("start", $langue);
    }

    function changeScenarioLanguage(newLang: string) {
        loadScenario(currentScenario, newLang);
    }

    function scrollElement() {
        tick().then(() => {
            const conversationElement = document.querySelector('.conversation');
            if (conversationElement) {
                conversationElement.scrollTo({
                    top: conversationElement.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    onMount(() => {
        loadProgress();
        langue.subscribe((langue) => {
            changeScenarioLanguage(langue);
        });
    });

</script>

{#if isAccueilVisible}
    <div class="accueil">
        <div class="containerAccueil">
            <h1>Bienvenue !</h1>
            <div class="contenu">
                <p>Découvre notre web documentaire sur le drag Bordelais</p>
                <p>Nous venons de t’ajouter dans un groupe de conversation où tu retrouvera différentes personne directement lié au monde du drag. Echanges avec eux pour en apprendre davantage sur ce milieu !</p>
            </div>
            <button id="start" on:click={startApp}>Commencer</button>
        </div>
    </div>
{/if}

<Layout onReset={onReset}>
    <div class="container">
        <div class="conversation">

            {#each messages as message}
                {#if message.type === "texteBlanc"}
                    <BulleTexteBlanc pseudo={message.pseudo ?? ""} src={message.src} heure={message.heure} text={message.text} />
                {:else if message.type === "texteVert"}
                    <BulleTexteVert heure={message.heure} text={message.text} />
                {:else if message.type === "mediaBlanc"}
                    <BulleMedia pseudo={message.pseudo ?? ""} src={message.src} mediaType={message.mediaType ?? "photo"} heure={message.heure} img={message.img ?? ""} video={message.video ?? ""} transcription={message.transcription ?? ""}/>
                {:else if message.type === "audioBlanc"}
                    <BulleAudio pseudo={message.pseudo ?? ""} src={message.src}  heure={message.heure} img={message.img ?? ""} transcription={message.transcription ?? ""}/>
                {/if}
            {/each}

        </div>  

        <div class="barreUtilisateur">
            <div class="reponses">
                {#each responses as response}
                    <BtnChoix texte={response.text} on:click={() => handleResponse(response)} disabled={isLoading} />
                {/each}
            </div>    

            <BarreEnvoie />
        </div>
    </div>
</Layout>

<style>

    .accueil {
        position: fixed; /* Fixe l'élément par rapport à l'écran */
        height: 100vh;
        width: 100vw;
        background: var(--noir);
        z-index: 200;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0; /* Position initiale en haut */
        transition: top 0.5s ease-out; /* Animation fluide */
    }

    .accueil.hide {
        top: -100vh; /* Déplace la div vers le haut de l'écran */
    }

    .containerAccueil{
        display: flex;
        width: 50vw;
        flex-direction: column;
        align-items: center;
        gap: 15vh;
        color: var(--blanc);
        text-align: center;
        line-height: 24px;
    }

    h1{
        font-size: 52px;
        font-weight: 600;
    }

    .contenu{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        align-self: stretch;
    }

    #start {
        display: flex;
        cursor: pointer;
        padding: 3vh 5vw;
        border-radius: 8px;
        color: var(--blanc);
        background-color: var(--noir);
        border: 1px solid var(--blanc);
        font-weight: 600;
    }

    #start:hover {
        color: var(--noir);
        background-color: var(--blanc);
        border: 1px solid var(--noir);
    }

    .container{
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
    }

    .conversation {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        max-height: 70vh;
        margin-bottom: 26vh;
        padding: 2vh 0;
        overflow-y: scroll;
        scrollbar-width: none;
    }

    .conversation::-webkit-scrollbar {
        display: none;
    }

    .barreUtilisateur {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2vh;
        position: fixed;
        bottom: 0;
        margin: 0 auto;
        height: 20vh;
        padding: 2vh 0 4vh 0;
        background: var(--beige);
        box-shadow: 0px -15px 1px -15px var(--gris);
        z-index: 10;
    }

    .reponses {
        display: inline-flex;
        align-items: center;
        gap: 50px;
    }

    @media screen and (max-width: 400px) {
        .conversation {
            width: 95vw;
        }
    }

</style>
