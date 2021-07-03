import React, { Component } from 'react';
import PokeCard from './PokeCard';
import pokemon from './pokemon';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let cards = [];
        for (let i = 0; i < pokemon.length; i++) {
            cards.push(<PokeCard key={i} id={pokemon[i].id} name={pokemon[i].name} type={pokemon[i].type} base_experience={pokemon[i].base_experience} />);
        }
        return <div className="Pokedex">{cards}</div>;
    }
}

export default Pokedex;
