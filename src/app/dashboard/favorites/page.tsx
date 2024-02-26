import { FavoritePokemons } from '@/pokemons';

export const metadata = {
  title: 'Favoritos',
  description: 'Elit nisi ad excepteur irure do labore sint ad amet officia.',
};

export default async function PakemonsPage() {
  return (
    <div className="p-2 flex flex-col">
      <span className="text-5xl text-center my-2 text-amber-700">
        Pokémons Favoritos <small className="text-blue-500">GLobal state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
