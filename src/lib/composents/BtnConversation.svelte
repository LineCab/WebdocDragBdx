<script lang="ts">
	import '$lib/styles/style.css';
	export let nom: string;
	export let message: string;
	export let img: string;
	export let path: string;
</script>

<a href={path}>
    <div class="imgGroupe" style="background: url({img}) center / cover no-repeat;"></div>
    <div class="titre">
        <p class="nom">{nom}</p>
        <p>{message}</p>
    </div>
</a>

<style>
    a{
        display: flex;
        align-items: center;
        gap: 18px;
        text-decoration: none;
        width: 100%;
    }

    .titre{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1vh;
        width: 70%;
    }

    .nom{
        color: var(--beige);
        font-size: 16px;
    }

    p{
        color: var(--gris);
        font-size: 12px;
        width: 100%;
        white-space: nowrap; 
        overflow: hidden;  /* Cache le texte qui dépasse */
        text-overflow: ellipsis;
    }

    .imgGroupe{
        width: 45px;
        height: 45px;
        border-radius: 55px;
    }
</style>