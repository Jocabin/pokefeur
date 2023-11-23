<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";
    import { rand } from "$lib/helpers";

    export let pokemon;

    $: ({ id, name, sprites } = pokemon);

    const dispatch = createEventDispatcher();

    onMount(() => {
        const timeout = setTimeout(() => {
            dispatch("disapear");
        }, rand(5000, 1000));

        return () => {
            clearTimeout(timeout);
        };
    });
</script>

<div>
    <img src={sprites.back_default} alt={name} />
</div>
