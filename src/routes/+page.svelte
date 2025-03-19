<script lang="ts">
    import '$lib/styles/style.css';
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';

    let animate = false;

    function startAnimation() {
        animate = true;
        setTimeout(() => {
            goto("/conversation");
        }, 1000); // Durée de l'animation en millisecondes
    }
</script>

<div class="accueil {animate ? 'slide-up' : ''}">
    <div class="titre">
        <div class="bienvenue">
            <h1>Bienvenue!</h1>
            <img class="etoile" src="/images/etoileTitre.svg" alt="">
        </div>
        <p>Découvre notre web documentaire sur le <span class="surligne">drag Bordelais</span></p>
    </div>
    <div class="contenu">
        <p>Nous venons de t’ajouter dans un groupe de conversation où tu retrouvera différentes personne directement lié au monde du drag. Échanges avec eux pour en apprendre davantage sur ce milieu !</p>
        <button id="start" on:click={startAnimation}>Commencer</button>
    </div>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

    .accueil {
        height: 80vh;
        width: 100%;
        background-color: aliceblue;
        background-image: url(/images/Accueil.png);
        display: flex;
        padding: 10vh 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        scrollbar-width: none;
        position: relative;
        transition: transform 1s ease-in-out;
    }

    .accueil.slide-up {
        transform: translateY(-100%);
    }

    .accueil::-webkit-scrollbar {
        display: none;
    }

    .titre{
        display: flex;
        margin-top: 25vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        width: 50vw;
    }

    .bienvenue{
        position: relative;
    }

    h1 {
        font-size: 80px;
        font-weight: 700;
        letter-spacing: -4px;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
        font-style: normal;
        color: var(--noir);
    }

    .etoile{
        position: absolute;
        top: -15px;
        left: 41px;
    }

    p{
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        color: var(--noir);
        line-height: 4vh;
    }

    .titre p{
        font-size: 28px;
        font-weight: 600;
        letter-spacing: -1.5px;
    }

    .contenu {
        display: flex;
        width: 60vw;
        gap: 32px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .surligne{
        display: flex;
        padding: 2px 4px;
        margin: 0 4px;
        background-color: #8ED600;
    }

    #start {
        display: flex;
        cursor: pointer;
        padding: 4px 20px;
        border-radius: 8px;
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--blanc);
        background-color: var(--noir);
        border: 1px solid var(--noir);
    }

    #start:hover {
        color: var(--noir);
        background-color: var(--blanc);
        border: 1px solid var(--noir);
    }
</style>