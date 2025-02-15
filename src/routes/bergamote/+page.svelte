<script lang="ts">
    import { bergamote } from "$lib/scripts/bergamote";
    import { bergamoteEn } from "$lib/scripts/bergamoteEn";
    import { bergamoteEs } from "$lib/scripts/bergamoteEs";
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
    let messagesB: Message[] = [];
    let responsesB: Response[] = [];
    let isLoading = true;

    function saveProgress() {
        localStorage.setItem("currentScenarioB", currentScenario);
        localStorage.setItem("messagesB", JSON.stringify(messagesB));
    }

    function messagePrive(newMp: string) {
        messagePv.set(newMp);
    }

    function loadProgress() {
        const savedScenario = localStorage.getItem("currentScenarioB");
        const savedMessages = localStorage.getItem("messagesB");

        if (savedScenario) {
            currentScenario = savedScenario;
        }

        if (savedMessages) {
            messagesB = JSON.parse(savedMessages);
        }
    }

    async function loadScenario(scenarioKey: string, langue: string) {
        let scenario;

        switch (langue) {
            case "en":
                scenario = bergamoteEn[scenarioKey];
                break;
            case "es":
                scenario = bergamoteEs[scenarioKey];
                break;
            case "fr":
            default:
                scenario = bergamote[scenarioKey];
                break;
        }

        if (!scenario) return;

        isLoading = true;
        currentScenario = scenarioKey;
        responsesB = [...scenario.responsesB];
        
        saveProgress();

        for (const msg of scenario.messagesB) {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            if (msg.mp) {
                messagePrive(msg.mp);
            }


            messagesB = [
                ...messagesB,
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
            
        messagesB = [
            ...messagesB,
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
        messagesB = [];
        responsesB = [];

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

<Layout onReset={onReset}>
    <div class="container">
        <div class="conversation">

            {#each messagesB as message}
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

        <div class="barreUtilisateur conversation">
            <div class="reponses">
                {#each responsesB as response}
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
