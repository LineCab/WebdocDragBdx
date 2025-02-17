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
    <div class="containerAccueil">
        <h1>Bienvenue !</h1>
        <div class="contenu">
            <p>Découvre notre web documentaire sur le drag Bordelais</p>
            <p>Nous venons de t’ajouter dans un groupe de conversation où tu retrouvera différentes personne directement lié au monde du drag. Echanges avec eux pour en apprendre davantage sur ce milieu !</p>
        </div>
        <button id="start" on:click={startAnimation}>Commencer</button>
    </div>
</div>

<style>
    .accueil {
        height: 120vh;
        width: 100%;
        background: var(--noir);
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    .containerAccueil {
        display: flex;
        width: 50vw;
        flex-direction: column;
        align-items: center;
        gap: 15vh;
        color: var(--blanc);
        text-align: center;
        line-height: 24px;
    }

    h1 {
        font-size: 52px;
        font-weight: 600;
    }

    .contenu {
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
</style>