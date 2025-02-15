<script lang="ts">
    import '$lib/styles/style.css';
    import Layout from '../layout.svelte';
    import { langue } from "$lib/stores/langueStore";
    import { reset } from "$lib/stores/resetStore";
    import Notification from '$lib/composents/Notification.svelte';

    let showNotification = false;
    let notificationClass = "";

    function handleReset() {
        showNotif();
        setTimeout(() =>{reset();}, 2000);
    }

    function showNotif() {
        showNotification = true;
        notificationClass = "";

        setTimeout(() => {
            notificationClass = "hide";
            setTimeout(() => {
                showNotification = false;
            }, 500);
        }, 3000);
    }

    function changeScenarioLanguage(newLang: string) {
        langue.set(newLang);
    }

    let titre = "";
    let catLangue = "";
    let texteLangue = "";
    let catReset = "";
    let texteReset = "";
    let btnReset = "";

    $: if ($langue === "fr"){
        titre = "Paramètres";
        catLangue = "Langue de l'application";
        texteLangue = "En cas de changement de langue, les messages déjà envoyés lors de l'expérience ne seront pas modifiés."
        catReset = "Réinitialiser l'expérience";
        texteReset = "Réinitialiser l'expérience permet de recommencer l'histoire du début et ainsi faire différents choix.";
        btnReset = "Réinitialiser";
    }else if ($langue === "en"){
        titre = "Settings";
        catLangue = "App Language";
        texteLangue = "Changing the language will not modify the messages already sent during the experience.";
        catReset = "Reset Experience";
        texteReset = "Resetting the experience will restart the story from the beginning, allowing you to make different choices.";
        btnReset = "Reset";
    }else if ($langue === "es"){
        titre = "Configuraciones";
        catLangue = "Idioma de la aplicación";
        texteLangue = "Cambiar el idioma no modificará los mensajes ya enviados durante la experiencia.";
        catReset = "Restablecer experiencia";
        texteReset = "Restablecer la experiencia permitirá reiniciar la historia desde el principio y hacer diferentes elecciones.";
        btnReset = "Restablecer";
    }

</script>

<Layout onReset={reset}>
    <div class="container">
        <h1>{titre}</h1>
        <div class="categories">
            <div class="titreCat bold">
                <img src="/images/langue.svg" alt="icon langage">
                <p>{catLangue}</p>
            </div>
            <div class="langues">
                <select bind:value={$langue} id="langue" on:change={() => changeScenarioLanguage($langue)}>
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
            <p>{texteLangue}</p>
        </div>
        <div class="categories">
            <div class="titreCat bold">
                <img src="/images/restart.svg" alt="icon restart">
                <p>{catReset}</p>
            </div>
            <p>{texteReset}</p>
            <button id="reset-btn" on:click={() => {handleReset()}}>
                <p>{btnReset}</p>
            </button>
        </div>
        {#if $langue === "fr"}
        <div class="categories">
            <div class="titreCat bold">
                <img src="/images/information.svg" alt="icon informations">
                <p>Informations sur l'application</p>
            </div>
            <p class="bold">Conception et développement</p>
            <p>Ce projet a été réalisé dans le cadre de la formation Métiers du Multimédia et de l'Internet (MMI) Bordeaux à l'IUT Bordeaux Montaigne, situé au 12 rue de l'Église.</p>
            <p class="bold">Equipe de projet</p>
            <ul>
                <li>Bartholomé Duteil : <span class="italique">Chargé de la création sonore</span></li>
                <li>Emma Dimbour : <span class="italique">Monteuse du documentaire et des éléments audiovisuel de la partie intéractive</span></li>
                <li>Justine Gelis : <span class="italique">Monteuse du documentaire et des éléments audiovisuel de la partie intéractive</span></li>
                <li>Line Cabaret : <span class="italique">Développement de la partie intéractive</span></li>
                <li>Nathan Vandaele : <span class="italique">Réalisateur du documentaire</span></li>
                <li>Dang-Thien-Phuc NGUYEN : <span class="italique">Graphiste</span></li>
            </ul>
            <p class="bold">Photographies, vidéos et contenus</p>
            <p>Les éléments visuels ont été produits par notre équipe, avec l’aimable contribution de <span class="blod">la photographe Orlane</span> pour certaines images.</p>
            <p class="bold">Composition musicale</p>
            <p>L’ensemble des musiques présentes dans le projet a été composé par Bartholomé.</p>
        </div>
        {:else if $langue === "en"}
        <div class="categories">
            <div class="titreCat bold">
                <img src="/images/information.svg" alt="icon information">
                <p>Application Information</p>
            </div>
            <p class="bold">Design and Development</p>
            <p>This project was carried out as part of the Multimedia and Internet Professions (MMI) training program in Bordeaux at the IUT Bordeaux Montaigne, located at 12 rue de l'Église.</p>
            
            <p class="bold">Project Team</p>
            <ul>
                <li>Bartholomé Duteil: <span class="italique">Sound design manager</span></li>
                <li>Emma Dimbour: <span class="italique">Editor of the documentary and audiovisual elements of the interactive part</span></li>
                <li>Justine Gelis: <span class="italique">Editor of the documentary and audiovisual elements of the interactive part</span></li>
                <li>Line Cabaret: <span class="italique">Development of the interactive part</span></li>
                <li>Nathan Vandaele: <span class="italique">Documentary director</span></li>
                <li>Dang-Thien-Phuc NGUYEN: <span class="italique">Graphic designer</span></li>
            </ul>
            
            <p class="bold">Photography, Videos, and Content</p>
            <p>The visual elements were produced by our team, with the kind contribution of <span class="bold">photographer Orlane</span> for some images.</p>
            
            <p class="bold">Musical Composition</p>
            <p>All the music in the project was composed by Bartholomé.</p>
        </div>
        {:else if $langue === "es"}
        <div class="categories">
            <div class="titreCat bold">
                <img src="/images/information.svg" alt="icon información">
                <p>Información sobre la aplicación</p>
            </div>
            <p class="bold">Diseño y Desarrollo</p>
            <p>Este proyecto fue realizado en el marco de la formación en Profesiones del Multimedia y de Internet (MMI) en Burdeos, en el IUT Bordeaux Montaigne, ubicado en el 12 rue de l'Église.</p>
            
            <p class="bold">Equipo del Proyecto</p>
            <ul>
                <li>Bartholomé Duteil: <span class="italique">Encargado de la creación sonora</span></li>
                <li>Emma Dimbour: <span class="italique">Editora del documental y de los elementos audiovisuales de la parte interactiva</span></li>
                <li>Justine Gelis: <span class="italique">Editora del documental y de los elementos audiovisuales de la parte interactiva</span></li>
                <li>Line Cabaret: <span class="italique">Desarrollo de la parte interactiva</span></li>
                <li>Nathan Vandaele: <span class="italique">Director del documental</span></li>
                <li>Dang-Thien-Phuc NGUYEN: <span class="italique">Diseñador gráfico</span></li>
            </ul>
            
            <p class="bold">Fotografías, Videos y Contenido</p>
            <p>Los elementos visuales fueron producidos por nuestro equipo, con la amable contribución de <span class="bold">la fotógrafa Orlane</span> para algunas imágenes.</p>
            
            <p class="bold">Composición Musical</p>
            <p>Toda la música del proyecto fue compuesta por Bartholomé.</p>
        </div>        
        {/if}
    </div>
</Layout>

{#if showNotification}
    <div class="notification {notificationClass}">
        <Notification titre="Confirmation " text="L'expérience a été réinitialisée." src="/images/informations.png"/>
    </div>
{/if}

<style>
    .container {
        width: 100%;
        padding: 4vh 0;
        display: flex;
        flex-direction: column;
        gap: 8vh;
    }

    h1 {
        font-size: 32px;
        font-weight: 800;
    }

    p{
        line-height: 2.4vh;
    }

    .categories {
        display: flex;
        flex-direction: column;
        gap: 3vh;
        max-width: 40vw;
    }

    .titreCat {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .bold{
        font-weight: 600;
    }

    .titreCat p {
        font-size: 20px;
    }

    select {
        cursor: pointer;
        width: 15vw;
        padding: 1.5vh 1vw;
        background: var(--beige);
        border-radius: 8px;
        border: 1px solid var(--noir);
        outline: none;
    }

    select option:hover {
        background-color: var(--noir);
        color: var(--beige);
    }

    button {
        cursor: pointer;
        background: none;
        border: 1px solid var(--noir);
        width: fit-content;
        padding: 1.5vh 1.5vw;
        border-radius: 8px;
        display: flex;
        gap: 1vw;
        align-items: center;
    }

    button:hover {
        background: var(--noir);
        color: var(--beige);
        border-color: var(--beige);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }

    .italique {font-style: italic;}

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
        animation: slideInFromRight 0.5s ease-out forwards;
    }

    .notification.hide {
        animation: slideOutToRight 0.5s ease-out forwards;
    }
</style>
