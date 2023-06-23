import React from 'react'
import { pokemonTabs } from '../utils/Constants';
import { useLocation } from 'react-router-dom';
import { setPokemonTab } from '../app/slices/AppSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';

function Footer() {
  const location = useLocation();
  const dispatch = useDispatch();
  const {currentPokemonTab} = useAppSelector(({app}) => app);

  
  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];


  return (
    <footer> 
      <div className='block'>

      </div>
      <div className="data">
        {location.pathname.includes("/pokemon") && (
          <ul>
            {routes.map((route) => (
              <li
                key={route.name}
                className={`${
                  currentPokemonTab === route.name ? "active" : ""
                }`}
                onClick={() => dispatch(setPokemonTab(route.name))}
              >
                {route.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='block'>
        
      </div>
    </footer>
  )
}

export default Footer