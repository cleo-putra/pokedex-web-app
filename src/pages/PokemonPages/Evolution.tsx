import React, {useState, useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getPokemonData } from '../../app/reducers/getPokemonData';
import PokemonCardGrid from '../../components/PokemonCardGrid';

function Evolution() {

  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const {currentPokemon, randomPokemons} = useAppSelector(({pokemon}) => pokemon);
  // const pokemonData = useAppSelector(({pokemon}) => pokemon);

  useEffect(() => {
    const fetchData = async() => {
      const pokemons = currentPokemon?.evolution.map(({pokemon}) => pokemon);
      console.log(pokemons, 'evol1');
      await dispatch(getPokemonData(pokemons!));
      setIsLoaded(true);
    };
    fetchData();
  }, [dispatch, currentPokemon]);

  console.log(currentPokemon, randomPokemons, 'evol2');

  return (
    <div className='page'>
      {isLoaded && <PokemonCardGrid pokemons={randomPokemons!}/>}
    </div>
  )
}

export default Evolution