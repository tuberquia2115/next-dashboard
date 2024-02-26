'use client';
import { useMemo } from 'react';
import { IoHeartOutline } from 'react-icons/io5';

import { useAppSelector } from '@/store';
import { PokemonGrid } from '..';

export function FavoritePokemons() {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
  const pokemons = useMemo(() => favoritePokemons, [favoritePokemons]);

  return <>{pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NotFavorites />}</>;
}

export const NotFavorites = () => {
  return (
    <div className=" flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
