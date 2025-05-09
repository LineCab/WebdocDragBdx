<script lang="ts">
    import '$lib/styles/style.css';
    import { tick } from "svelte";
    export let src: string;
    export let img: string;
    export let pseudo: string;
	export let heure: string;
	export let transcription: string;
    let isTransOpen = false;

    function openTrans() {
        isTransOpen = true;
        scrollElement();
    }

    function closeTrans() {
        isTransOpen = false;
    }

    function scrollElement() {
        tick().then(() => {
            const conversationElement = document.getElementById('transciptionTexte');
            if (conversationElement) {
                conversationElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
</script>

<div class="ligneMess">
    <div class="imgContact" style="background: url({src}) center / cover no-repeat;"></div>
    <div class="messHoraire">
        <p class="pseudo">{pseudo}</p>
        <div class="transcription">
            <div class="mess">
                <audio controls>
                    <source src="{img}" type="audio/mp3">
                </audio>
            </div>
            {#if isTransOpen}
                <div id="transciptionTexte" class="mess blanc">
                    <p>{@html transcription}</p>
                </div>
            {/if}
        </div>
        <div class="infos">
            <button on:click={() => isTransOpen ? closeTrans() : openTrans()}>Transcription</button>
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

    .pseudo{
        color: var(--grisFonce);
        font-size: 12px;
    }

    .messHoraire{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 1vh;
    }

    .transcription{
        display: flex;
        flex-direction: column;
        gap: 1vh;
        color: var(--grisFonce);
    }

    .mess{
        display: flex;
        width: 30vw;
        flex-direction: column;
        justify-content: center;
        border-radius: 8px;
    }

    .mess audio{
        width: 100%;
    }

    source{
        background: var(--violetClair);
    }

    .blanc{
        padding: 8px 12px;
        gap: 2vh;
        background: var(--violetClair);
        width: fit-content;
        max-width: 45vw;
    }

    .blanc p{
        font-size: 14px;
        font-weight: 500;
        line-height: 2.4vh;
        color: var(--blanc);
    }

    .infos{
        display: flex;
        justify-content: space-between;
        padding: 0 1vw;
    }

    button{
        background: none;
        border: none;
        color: var(--grisFonce);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
    }

    .horaireMess{
        align-self: stretch;
        color: var(--gris);
        font-size: 10px;
        font-weight: 500;
    }
    
	@media (max-width: 800px) {
        .ligneMess{
            gap: 2vw;
        }

        .mess {
            width: 65vw;
        }
    }

</style>