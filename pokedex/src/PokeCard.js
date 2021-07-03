import React, { Component } from 'react';
import './PokeCard.css'

class PokeCard extends Component {
    render() {
        function getImage(id) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        }

        return (
            <div className="PokeCard">
                <h2>{this.props.name}</h2>
                <img className="PokeCard-img" alt={this.props.name} src={getImage(this.props.id)} />
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.base_experience}</p>
            </div>
        );
    }
}

export default PokeCard;
