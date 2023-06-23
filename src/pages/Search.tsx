// @ts-nocheck

import React, {useEffect} from 'react'
import Wrapper from '../sections/Wrapper';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getInitialPokemonData } from '../app/reducers/getInitialPokemonData';
import { getPokemonData } from '../app/reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';
import { debounce } from '../scss/utils/Debounce';
import Loader from '../components/Loader';
import { setLoading } from '../app/slices/AppSlice';

function Search() {
  const dispatch = useAppDispatch();
  const {allPokemon, randomPokemons} = useAppSelector(({pokemon}) => pokemon);
  const isLoading = useAppSelector(({ app: { isLoading } }) => isLoading);
  
  console.log(allPokemon, randomPokemons, 'search2');

  useEffect(() => {
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if(allPokemon) {
      const clonedPokemons = [...allPokemon];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 50);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }, [allPokemon, dispatch]);

  useEffect(() => {
    if(randomPokemons) {
      dispatch(setLoading(false));
    }
  }, [randomPokemons, dispatch]);


  const getPokemon = async(value: string) => {
    if(value.length) {
      const pokemons = allPokemon?.filter((pokemon) =>
        pokemon.name.includes(value.toLowerCase())
      );
      dispatch(getPokemonData(pokemons!));
    } else {
      const clonedPokemons = [...allPokemon as []];
      const randomPokemonsId = clonedPokemons
        .sort(() => Math.random() - Math.random())
        .slice(0, 20);
      dispatch(getPokemonData(randomPokemonsId));
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search">
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            className="pokemon-searchbar"
            placeholder="Search Pokemon"
          />
          <PokemonCardGrid pokemons={randomPokemons} />
        </div>
      )}
    </>
  )
}

export default Wrapper(Search);