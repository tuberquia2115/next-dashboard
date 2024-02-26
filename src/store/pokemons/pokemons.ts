import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';


interface Favorites {
  [key: string]: SimplePokemon
}

interface PokemonsFavoriteState {
  favorites: Favorites
}



const initialState: PokemonsFavoriteState = {
  favorites: {},
  // ...getInitialState()
}

const pokemonsSlide = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<Favorites>) {
      state.favorites = action.payload

    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];

      } else {
        state.favorites[id] = pokemon;
      }
      // TODO no se debe de hacer en redux, pero a{un asi funciona}
      //localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))

    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlide.actions

export default pokemonsSlide.reducer