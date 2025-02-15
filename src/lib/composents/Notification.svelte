<script lang="ts">
	import '$lib/styles/style.css';
	export let text: string;
	export let titre: string;
	export let src: string;
</script>

<div class="notif">
    <div class="entete">
        <div class="gauche">
            <div class="imgNotif" style="background: url({src}) center / cover no-repeat;"></div>
            <p>{titre}</p>
        </div>
        <div class="droite">
            <!-- <img src="/images/croix.svg" alt=""> -->
        </div>
    </div>
    <p>{text}</p>
</div>

<style>
    .notif{
        display: flex;
        flex-direction: column;
        padding: 1.5vh 1.5vh;
        width: 20vw;
        min-height: 10vh;
        background: var(--blanc);
        border: 1px solid var(--noir);
        border-radius: 8px;
    }

    .notif p{
        line-height: 2.4vh;
    }

    .entete{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vh;
    }

    .gauche{
        display: flex;
        align-items: center;
        gap: 1vw;
    }

    .gauche p{
        font-weight: bold;
    }

    .imgNotif{
        width: 26px;
        height: 26px;
        border-radius: 34px;
    }

    .entete img{
        height: 15px;
    }
</style>