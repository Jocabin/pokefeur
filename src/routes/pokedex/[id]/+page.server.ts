export async function load({ params, parent }) {
    const data = await parent();
    return {
        pokemon: data.pokemons[Number(params.id) - 1]
    };
}
