<script lang="ts">
    import '$lib/styles/style.css';
    import BtnConversation from '$lib/composents/BtnConversation.svelte';
    import { goto } from "$app/navigation";
    import { messagePv } from "$lib/stores/mpStore";
    import { langue } from "$lib/stores/langueStore";
    import Notification from './Notification.svelte';

    let orlaneNotification = false;
    let bergamoteNotification = false;
    let conversationOrlaneAffichee = false;
    let conversationBergamoteAffichee = false;

    if (typeof window !== "undefined") {

        orlaneNotification = localStorage.getItem("notifOrlaneDisplayed") === "true";
        bergamoteNotification = localStorage.getItem("notifBergamoteDisplayed") === "true";

        conversationOrlaneAffichee = localStorage.getItem("conversationOrlaneAffichee") === "true";
        conversationBergamoteAffichee = localStorage.getItem("conversationBergamoteAffichee") === "true";
    }

    function showNotifOrlane() {
        showNotification('orlane');
        localStorage.setItem("notifOrlaneDisplayed", "true");
    }

    function showNotifBergamote() {
        showNotification('bergamote');
        localStorage.setItem("notifBergamoteDisplayed", "true");
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

    $: if ($messagePv === "orlane" && !conversationOrlaneAffichee) {
        conversationOrlaneAffichee = true;
        localStorage.setItem("conversationOrlaneAffichee", "true");
    }

    $: if ($messagePv === "bergamote" && !conversationBergamoteAffichee) {
        conversationBergamoteAffichee = true;
        localStorage.setItem("conversationBergamoteAffichee", "true");
    }

    function handleNavigate() {
        goto("./parametres");
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

</script>

<div class="container">
    <div class="conversations">
            <p>{ titre }</p>
            <BtnConversation path="/" nom={titreConvG} message={convG} img="/images/affiche.png" />
        <hr>

        {#if conversationBergamoteAffichee}
            <BtnConversation path="./bergamote" nom="Bergamote Lips" message={convBergamote} img="/images/bergamote.png" />
            <hr>
            {#if !bergamoteNotification}
                {showNotifBergamote()}
                <div class="notification">
                    <Notification titre={titreNotif} text="{contenuNotif}Bergamote Lips" src="/images/bergamote.png"/>
                </div>
            {/if}
        {/if}

        {#if conversationOrlaneAffichee}
            <BtnConversation path="./orlane" nom="Orlane" message={convOrlane} img="/images/orlane.png" />
            <hr>
            {#if !orlaneNotification}
                {showNotifOrlane()}
                <div class="notification">
                    <Notification titre={titreNotif} text="{contenuNotif}Orlane" src="/images/orlane.png"/>
                </div>
            {/if}
        {/if}
    </div>

    <div class="btns">
        <button on:click={handleNavigate}>
            <img src="/images/parametre.svg" alt="icon parametre">
            {parametre}
        </button>
    </div>
</div>


<style>
    .container {
        position: sticky;
        top: 0;
        height: 90vh;
        width: 100%;
        background: var(--noir);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 5vh 1vw;
        gap: 3vh;
    }

    .conversations {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    .btns {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    p {
        color: var(--beige);
        font-size: 24px;
        font-weight: 600;
        margin-left: 10px;
        margin-bottom: 3vh;
    }

    hr {
        width: 100%;
        border: none;
        border-top: 1px solid var(--beige);
    }

    button {
        cursor: pointer;
        background: none;
        border: 1px solid var(--beige);
        color: var(--beige);
        width: fit-content;
        padding: 1.5vh 1.5vw;
        border-radius: 8px;
        display: flex;
        gap: 1vw;
        align-items: center;
    }

    button img {
        height: 18px;
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
    }
</style>
