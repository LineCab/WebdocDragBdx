<script lang="ts">
    import '$lib/styles/style.css';
    import { goto } from "$app/navigation";

    let animate = false;

    function startAnimation() {
        animate = true;
        setTimeout(() => {
            goto("/conversation");
        }, 1000);
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
        <p>Nous venons de t’ajouter dans un groupe de conversation où tu retrouveras différentes personnes directement liées au monde du drag. Échange avec eux pour en apprendre davantage sur ce milieu !</p>
        <button id="start" on:click={startAnimation}>Commencer</button>
    </div>
</div>

<style>

    @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

    .accueil {
        height: 80vh;
        width: 100%;
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
        gap: 6vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .surligne{
        display: flex;
        padding: 2px 8px;
        margin: 0 4px;
        color: var(--blanc);
        background-color: var(--violet);
    }

    #start {
        display: flex;
        cursor: pointer;
        padding: 1vh 3vw;
        border-radius: 8px;
        font-size: 24px;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--blanc);
        background: var(--violet);
        border: 1px solid var(--violet);
    }

    #start:hover {
        color: var(--noir);
        background: none;
        border: 1px solid var(--noir);
    }

    @media (max-width: 800px) {
        .accueil {
            height: 100%;
            padding: 0 0 0 0;
        }

        h1 {
            font-size: 60px;
        }

        .titre{
            margin-top: 10vh;
            width: 90vw;
        }

        .titre p{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            line-height: 5vh;
        }

        .contenu {
            width: 90vw;
        }

        #start {
            padding: 2vh 12vw;
        }
    }
</style>