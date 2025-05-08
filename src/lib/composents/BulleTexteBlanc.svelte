<script lang="ts">
	import '$lib/styles/style.css';
	export let src: string;
	export let heure: string;
    export let pseudo: string;
	export let text: string | undefined;
</script>

<div class="ligneMess">
    <div class="imgContact" style="background: url({src}) center / cover no-repeat;"></div>
    <div class="contenu">
        <p class="pseudo">{pseudo}</p>
        <div class="mess">
            <p class="textMess">{@html text}</p>
            <p class="horaireMess">{heure}</p>
        </div>
    </div>
</div>

<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ligneMess{
        display: flex;
        align-items: flex-start;
        gap: 1vw;
        align-self: stretch;
        animation: fadeInUp 0.3s ease-out;
    }


    .imgContact{
        width: 34px;
        height: 34px;
        margin-top: 2.5vh;
        flex-shrink: 0;
        border-radius: 34px;
    }

    .contenu{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    .pseudo{
        color: var(--grisFonce);
        font-size: 12px;
    }

    .mess{
        display: flex;
        max-width: 30vw;
        padding: 8px 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        gap: 2vh;
        background: var(--violetClair);
    }

    .textMess{
        align-self: stretch;
        color: var(--blanc);
        font-size: 14px;
        font-weight: 500;
        line-height: 2.4vh;
    }

    .horaireMess{
        align-self: stretch;
        color: var(--gris);
        text-align: right;
        font-size: 10px;
        font-weight: 500;
    }
    
	@media (max-width: 800px) {
        .ligneMess{
            gap: 2vw;
        }

        .mess {
            max-width: 60vw;
        }
    }

</style>