<script lang="ts">
    import Proie from "$lib/components/Proie.svelte";
    import { onMount } from "svelte";
    import { rand } from "$lib/helpers";

    export let data;

    $: pokemons = data.pokemons;
    let ids: number[] = [];

    function remove(bouclePosition: number) {
        ids = ids.filter((_, idPosition) => {
            return bouclePosition !== idPosition;
        });
    }

    onMount(() => {
        const interval = setInterval(() => {
            ids = [...ids, rand(pokemons.length)];
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

{#each ids as id, bouclePosition}
    <Proie
        on:disapear={() => {
            remove(bouclePosition);
        }}
        pokemon={pokemons[id]}
        {position 
    />
{/each}
