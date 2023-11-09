<script lang="ts">
    import Pokemon from "$lib/components/Pokemon.svelte";

    export let data;
    const pokemons = data?.pokemons;
</script>

<h1>pokedex</h1>

<div class="grid">
    {#each pokemons as pokemon (pokemon.id)}
        <Pokemon {pokemon} />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        row-gap: 4rem;
    }
</style>
