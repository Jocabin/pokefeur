<script>
    export let data;
    const { id, name, sprites } = data?.pokemon;
</script>

<p>ID: {id}</p>
<p>ID: {name}</p>
<img src={sprites.back_default} alt="F" />
