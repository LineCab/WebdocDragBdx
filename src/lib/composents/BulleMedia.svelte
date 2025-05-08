<script lang="ts">
    import '$lib/styles/style.css';
    import { tick } from "svelte";
    export let src: string;
    export let heure: string;
    export let img: string;
    export let pseudo: string;
    export let video: string;
    export let mediaType: "video" | "photo";
    export let transcription: string;
    let isModalOpen = false;
    let isTransOpen = false;

    function openModal() {
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }

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
    <div class="contenu">
        <p class="pseudo">{pseudo}</p>
        <div class="transcription">
            <div class="mess">
                {#if mediaType === "video"}
                    <button class="video" style="background: url({img ? img : ''}) center / cover no-repeat;" on:click={openModal}>
                        <img src="/images/playVideo.svg" alt="icon play">
                    </button>
                    {#if transcription}
                        <div class="infos">
                            <button class="btnTrans" on:click={() => isTransOpen ? closeTrans() : openTrans()}>Transcription</button>
                            <p class="horaireMess">{heure}</p>
                        </div>
                    {:else}
                        <p class="horaireMess">{heure}</p>
                    {/if}
                {:else}
                    <button class="photo" style="background: url({img ? img : ''}) center / cover no-repeat;" on:click={openModal}></button>
                    <p class="horaireMess">{heure}</p>
                {/if}
            </div>
            {#if isTransOpen}
                <div id="transciptionTexte" class="mess blanc">
                    <p>{@html transcription}</p>
                    <p class="horaireMess">{heure}</p>
                </div>
            {/if}
        </div>
    </div>
</div>

{#if isModalOpen}
    <button class="modal" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            {#if mediaType === "video"}
                <video controls autoplay>
                    <source src={video} type="video/mp4">
                    Votre navigateur ne prend pas en charge la vidéo.
                </video>
            {:else}
                <img src={img} alt="photo" />
            {/if}
            <img class="close" src="/images/croix.svg" style="height: 20px;" alt="croix" on:click={closeModal} />
        </div>
    </button>
{/if}

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

    button{
        background: none;
        border: none;
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
        color: var(--gris);
        font-size: 12px;
    }

    .transcription{
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }

    .mess{
        display: flex;
        width: fit-content;
        max-width: 45vw;
        padding: 8px 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        gap: 2vh;
        background: var(--violetClair);
    }

    .blanc p{
        font-size: 14px;
        font-weight: 500;
        line-height: 2.4vh;
    }
    
    .video, .photo{
        width: 15vw;
        height: 40vh;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .video::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    .video img{
        z-index: 2;
    }

    .horaireMess{
        align-self: stretch;
        color: var(--gris);
        text-align: right;
        font-size: 10px;
        font-weight: 500;
    }

    .infos{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .btnTrans{
        background: none;
        border: none;
        color: var(--gris);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        height: 90vh;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .modal-content img, .modal-content video {
        height: 100%;
        width: auto;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    @media (max-width: 800px) {
        .ligneMess{
            gap: 2vw;
        }

        .mess {
            max-width: 60vw;
        }

        .video, .photo{
            width: 60vw;
            height: 50vh;
            border-radius: 4px;
        }
    }
</style>
