import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState:AppTypeInitialState = {
  isLoading: true,
  currentPokemonTab: pokemonTabs.description,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPokemonTab:(state, action) => {
      state.currentPokemonTab = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {setPokemonTab, setLoading} = AppSlice.actions;