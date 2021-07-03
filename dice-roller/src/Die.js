import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.num} ${this.props.rolling ? "Die-rolling" : null}`}></i>
            </div>
        );
    }
}

export default Die;
