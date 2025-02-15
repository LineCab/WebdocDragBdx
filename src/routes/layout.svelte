<script lang="ts">
    import '$lib/styles/style.css';
    import BarreLaterale from "$lib/composents/BarreLaterale.svelte";

    export let onReset: () => void;
</script>

<div class="container">
    <div class="barreLaterale">
        <BarreLaterale on:reset={onReset} />
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

</style>