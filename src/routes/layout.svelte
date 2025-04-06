<script lang="ts">
    import '$lib/styles/style.css';
    import BarreLaterale from "$lib/composents/BarreLaterale.svelte";
    import { onMount } from 'svelte';

    export let onReset: () => void;

    let showMenu = false;

    function toggleMenu() {
        showMenu = !showMenu;
    }

    export function handleToggleMenu() {
        toggleMenu();
    }

</script>

<div class="container">
    {#if showMenu}
        <div class="barreLateraleMobile" id="menu">
            <BarreLaterale on:reset={onReset} on:close={() => showMenu = false}/>
        </div>
    {/if}
    <div class="barreLaterale" id="menu">
        <BarreLaterale on:reset={onReset} on:close={() => showMenu = false}/>
    </div>
    <div class="chat">
        <slot></slot>
    </div>
</div>

<style>
    .container{
        display: flex;
        align-items: top;
    }

    .barreLaterale{
        width: 20vw;
        left: 0;
        z-index: 20;
    }

    .barreLateraleMobile{
        width: 300px;
        background-color: var(--noir);
        z-index: 999;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
    }

    .chat {
        position: relative;
        width: 70%;
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 4vh;
        justify-content: flex-end;
        align-items: center;
    }

    .barreLateraleMobile {
        position: static;
    }

    @media (max-width: 800px) {

        .barreLaterale{
            display: none;
        }

        .barreLateraleMobile{
            width: 100vw;
            z-index: 90;
            position: absolute;
        }

        .chat {
            width: 90vw;
        }
    }

</style>