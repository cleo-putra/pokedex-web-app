import React from 'react'
import { useAppSelector } from '../../app/hooks'
import PokemonContainer from '../../components/PokemonContainer';
import Info from '../../components/info';

function Description() {
  const pokemonData = useAppSelector(
    ({pokemon: {currentPokemon}}) => currentPokemon
  );

  return (
    <>
      <Info data={pokemonData} />
      <PokemonContainer image={pokemonData?.image!} />
    </>
  )
}

export default Description