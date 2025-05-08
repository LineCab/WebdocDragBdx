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
        border: 1px solid var(--violet);
        background: var(--violetClair);
        color: var(--blanc);
        text-align: center;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover{
        background: var(--violet);
        color: var(--blanc);
    }

    @media (max-width: 800px) {
        button{
            max-width: 100%;
        }
    }
</style>