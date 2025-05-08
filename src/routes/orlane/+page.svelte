<script lang="ts">
    import { orlane } from "$lib/scripts/orlane";
    import { orlaneEn } from "$lib/scripts/orlaneEn";
    import { orlaneEs } from "$lib/scripts/orlaneEs";
    import { onMount } from "svelte";
    import { tick } from "svelte";
    import { langue } from "$lib/stores/langueStore";
    import { messagePv } from "$lib/stores/mpStore";


    import Layout from '../layout.svelte';
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
    let messagesO: Message[] = [];
    let responsesO: Response[] = [];
    let isLoading = true;

    function saveProgress() {
        localStorage.setItem("currentScenarioO", currentScenario);
        localStorage.setItem("messagesO", JSON.stringify(messagesO));
    }

    function messagePrive(newMp: string) {
        messagePv.set(newMp);
    }

    function loadProgress() {
        const savedScenario = localStorage.getItem("currentScenarioO");
        const savedMessages = localStorage.getItem("messagesO");

        if (savedScenario) {
            currentScenario = savedScenario;
        }

        if (savedMessages) {
            messagesO = JSON.parse(savedMessages);
        }
    }

    async function loadScenario(scenarioKey: string, langue: string) {
        let scenario;

        switch (langue) {
            case "en":
                scenario = orlaneEn[scenarioKey];
                break;
            case "es":
                scenario = orlaneEs[scenarioKey];
                break;
            case "fr":
            default:
                scenario = orlane[scenarioKey];
                break;
        }

        if (!scenario) return;

        isLoading = true;
        currentScenario = scenarioKey;
        responsesO = [...scenario.responsesO];
        
        saveProgress();

        for (const msg of scenario.messagesO) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (msg.mp) {
                messagePrive(msg.mp);
            }


            messagesO = [
                ...messagesO,
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
            
        messagesO = [
            ...messagesO,
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
        messagesO = [];
        responsesO = [];

        messagePv.set("reinitialiser");

        localStorage.setItem("notifOrlaneDisplayed", "false");
        localStorage.setItem("conversationOrlaneAffichee", "false");
        localStorage.setItem("notiforlaneDisplayed", "false");
        localStorage.setItem("conversationorlaneAffichee", "false");

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

    let layoutComponent: InstanceType<typeof Layout>;

    function toggleMenu() {
        layoutComponent.handleToggleMenu();
    }

</script>

<Layout bind:this={layoutComponent} onReset={onReset}>
    <div class="container">
        <div class="navBar">
            <h1>Drag Bdx</h1>
            <img id="menu" src="images/Menu.svg" alt="menu" on:click={toggleMenu}>
        </div>
        <div class="conversation">
            {#each messagesO as message}
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
                {#each responsesO as response}
                    <BtnChoix texte={response.text} on:click={() => handleResponse(response)} disabled={isLoading} />
                {/each}
            </div>    

            <BarreEnvoie />
        </div>
    </div>
</Layout>

<style>

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
        background: #F6F6F6;
        box-shadow: 0px -15px 1px -15px var(--gris);
        z-index: 10;
    }

    .reponses {
        display: inline-flex;
        align-items: center;
        gap: 50px;
    }

    .navBar{
        display: none;
    }

    @media (max-width: 800px) {
        h1{
            font-size: 24px;
            font-weight: 700;
            letter-spacing: -1px;
            text-transform: uppercase;
            font-family: "Barlow", sans-serif;
            font-style: normal;
            color: var(--noir);
        }

        .navBar{
            display: flex;
            position: absolute;
            top: 0;
            z-index: 1;
            width: 90vw;
            align-items: center;
            justify-content: space-between;
            padding: 2vh 5vw;
            background-color: rgba(238, 229, 220, 0.8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        #menu {
            width: 30px;
            cursor: pointer;
        }

        .barreUtilisateur {
            width: 90vw;
            gap: 2vh;
            padding: 3vh 5vw;
        } 

        .conversation {
            width: 90vw;
            margin-bottom: 26vh;
        }
        
        .reponses {
            gap: 12px;
        }
    }

</style>
