<script>
    export let pokemon;
    const { id, name, sprites } = pokemon;
</script>

<div>
    <a href="/pokedex/{id}">
        <p>{id} - {name}</p>
        <img src={sprites.back_default} alt={name} />
    </a>
</div>
