import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState:AppTypeInitialState = {
  currentPokemonTab: pokemonTabs.description,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPokemonTab:(state, action) => {
      state.currentPokemonTab = action.payload;
    },
  },
});

export const {setPokemonTab} = AppSlice.actions;