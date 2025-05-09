<script lang="ts">
    import { scenarios } from "$lib/scripts/scenario";
    import { scenariosEn } from "$lib/scripts/scenarioEn";
    import { scenariosEs } from "$lib/scripts/scenarioEs";
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
    import Notification from '$lib/composents/Notification.svelte';

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
        // localStorage.setItem("bergamoteNotification", "false");
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

    let layoutComponent: InstanceType<typeof Layout>;

    function toggleMenu() {
        layoutComponent.handleToggleMenu();
    }

    
    let bergamoteNotification = false;
    let orlaneNotification = false;
    let conversationOrlaneAffichee = false;
    let conversationBergamoteAffichee = false;

    if (typeof window !== "undefined") {

        orlaneNotification = localStorage.getItem("notifOrlaneDisplayed") === "true";
        bergamoteNotification = localStorage.getItem("notifBergamoteDisplayed") === "true";

        conversationOrlaneAffichee = localStorage.getItem("conversationOrlaneAffichee") === "true";
        conversationBergamoteAffichee = localStorage.getItem("conversationBergamoteAffichee") === "true";
    }

    let titre = "";
    let titreConvG = "";
    let convG = "";
    let convBergamote = "";
    let convOrlane = "";
    let titreNotif = "";
    let contenuNotif = "";
    let parametre = "";

    $: if ($langue === "fr"){
        titre = "Vos conversations";
        titreConvG = "La monde du drag";
        convG = "Découvre le monde du drag"
        convBergamote = "Découvre ma passion pour les costumes";
        convOrlane = "Photographe, je t'apporte un regard extérieur";
        titreNotif = "Nouvelle conversation";
        contenuNotif = "Tu as rencontré une nouvelle personne. Dans tes conversations privées retrouve ";
        parametre = "Paramètres";
    }else if ($langue === "en"){
        titre = "Your Conversations";
        titreConvG = "The World of Drag";
        convG = "Discover the world of drag";
        convBergamote = "Discover my passion for costumes";
        convOrlane = "Photographer, I bring you an outsider's perspective";
        titreNotif = "New Conversation";
        contenuNotif = "You have met a new person. Find them in your private conversations";
        parametre = "Settings";
    }else if ($langue === "es"){
        titre = "Tus conversaciones";
        titreConvG = "El mundo del drag";
        convG = "Descubre el mundo del drag";
        convBergamote = "Descubre mi pasión por los disfraces";
        convOrlane = "Fotógrafa, te ofrezco una mirada externa";
        titreNotif = "Nueva conversación";
        contenuNotif = "Has conocido a una nueva persona. Encuéntrala en tus conversaciones privadas";
        parametre = "Configuración";
    }

    function showNotifBergamote() {
        showNotification('bergamote');
        localStorage.setItem("notifBergamoteDisplayed", "true");
    }

    function showNotifOrlane() {
        showNotification('orlane');
        localStorage.setItem("notifOrlaneDisplayed", "true");
    }

    function showNotification(conversationType: string) {
        if (conversationType === 'orlane') {
            orlaneNotification = true;
        } else if (conversationType === 'bergamote') {
            bergamoteNotification = true;
        }
        setTimeout(() => {
            if (conversationType === 'orlane') {
                orlaneNotification = false;
            } else if (conversationType === 'bergamote') {
                bergamoteNotification = false;
            }
        }, 3000);
    }

    $: if ($messagePv === "bergamote" && !conversationBergamoteAffichee) {
        conversationBergamoteAffichee = true;
        localStorage.setItem("bergamoteNotification", "true");
    }

    $: if ($messagePv === "orlane" && !conversationOrlaneAffichee) {
        conversationOrlaneAffichee = true;
        localStorage.setItem("orlaneNotification", "true");
    }

</script>

<Layout bind:this={layoutComponent}  onReset={onReset}>
    <div class="container">
        <div class="navBar">
            <h1>Drag Bdx</h1>
            <img id="menu" src="images/Menu.svg" alt="menu" on:click={toggleMenu}>
        </div>

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

        {#if conversationBergamoteAffichee}
            {#if !bergamoteNotification}
                {showNotifBergamote()}
                <div class="notification">
                    <Notification titre={titreNotif} text="{contenuNotif}Bergamote Lips" src="/images/bergamote.png"/>
                </div>
            {/if}
        {/if}

        {#if conversationOrlaneAffichee}
            {#if !orlaneNotification}
                {showNotifOrlane()}
                <div class="notification">
                    <Notification titre={titreNotif} text="{contenuNotif}Orlane" src="/images/orlane.png"/>
                </div>
            {/if}
        {/if}

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

    @keyframes slideInFromRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutToRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .notification {
        position: fixed;
        right: 2vh;
        top: 3vh;
        opacity: 0;
        animation: slideInFromRight 0.5s ease-out forwards, slideOutToRight 0.5s ease-out forwards 4s;
        z-index: 999;
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
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        #menu {
            width: 30px;
            cursor: pointer;
        }

        .conversation {
            width: 90vw;
            margin-bottom: 26vh;
        }

        .barreUtilisateur {
            width: 90vw;
            gap: 2vh;
            padding: 3vh 5vw;
        }

        .reponses {
            gap: 12px;
        }
    }

</style>
