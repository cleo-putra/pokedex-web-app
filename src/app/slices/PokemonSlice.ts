import { createSlice } from "@reduxjs/toolkit";
import { PokemonInitialStateType } from "../../utils/Types";
import { getInitialPokemonData } from "../reducers/getInitialPokemonData";
import { getPokemonData } from "../reducers/getPokemonData";

const initialState: PokemonInitialStateType = {
  allPokemon: undefined,
  randomPokemons: undefined,
  currentPokemon: undefined,
};

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialPokemonData.fulfilled, (state,action) => {
      state.allPokemon = action.payload
    });
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.randomPokemons = action.payload;
    });
  },
});

export const {setCurrentPokemon} = PokemonSlice.actions;