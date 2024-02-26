import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';

export const metadata = {
  title: '151 Pokémons',
  description: 'Lista de 151 pokemons',
};

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error del lado del servidor que no debería de suceder');
  // throw notFound();
  return pokemons;
};

export default async function PakemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl text-center my-2">
        Listado de Pokémons <small className="text-blue-500">Estáico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
