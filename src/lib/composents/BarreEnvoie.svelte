<script lang="ts">
	import '$lib/styles/style.css';
</script>

<div class="barreEnvoie">
    <div class="media">
        <img src="/images/photo.svg" alt="">
    </div>
    <div class="barre">
        <img src="/images/cursor.svg" alt="">
        <p class="placeHover">Message</p>
    </div>
    <div class="btn">
        <img src="/images/flecheEnvoie.svg" alt="">
    </div>
</div>

<style>
    .barreEnvoie{
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    .media{
        display: flex;
        width: 6vh;
        height: 6vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: var(--blanc);
    }

    .barre{
        display: flex;
        width: 20vw;
        height: 4vh;
        padding: 1vh 1vw;
        align-items: center;
        gap: 4px;
        border-radius: 10px;
        background: var(--blanc);
    }

    .btn{
        display: flex;
        width: 6vh;
        height: 6vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: var(--vertAction);
    }

    p {
        color: var(--gris);
    }

    @media screen and (max-width: 800px) {
        .barreEnvoie{
            width: 100%;
            gap: auto;
            justify-content: center;
        }
        .barre {
            width: 70vw;
        }
    }
</style>