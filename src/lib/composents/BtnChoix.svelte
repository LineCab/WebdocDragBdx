<script lang="ts">
	import '$lib/styles/style.css';
	export let texte: string;
    export let disabled: boolean = false;
</script>

<button on:click {disabled}>{texte}</button>

<style>
    button:disabled {
        opacity: 0.5;
        pointer-events: none;
        cursor: not-allowed;
    }

    button{
        display: flex;
        min-width: 15vw;
        max-width: 22vw;
        min-height: 5vh;
        padding: 2vh 2vw;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid var(--vertAction);
        background: var(--vert);
        text-align: center;
        cursor: pointer;
        font-size: 14px;
    }

    button:hover{
        background: var(--vertAction);
        color: var(--blanc);
    }
</style>