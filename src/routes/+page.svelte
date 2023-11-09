<script lang="ts">
    import Proie from "$lib/components/Proie.svelte";
    import type { Pokemon as PType } from "$lib/types";

    export let data;
    const pokemons = data.pokemons;
    const proies: PType[] = [];
    const randomPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

    for (const pokemon of pokemons) {
        proies.push(pokemon);
    }
</script>

{#each proies.filter((_, i) => i < 3) as proie}
    <Proie pokemon={proie} />
{/each}
