'use client';

import { Provider } from 'react-redux';
import { store } from '.';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemons/pokemons';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const getInitialState = () => {
    // if (typeof localStorage === 'undefined') return {} TODO: Es una manejar se validar exista en el lado del cliente

    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
    store.dispatch(setFavoritePokemons(favorites));
  };

  useEffect(() => {
    getInitialState();
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
