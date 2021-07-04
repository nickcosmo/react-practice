import React, { Component } from 'react';
import './Loser.css';

class Loser extends Component {
    render() {
        return (
            <div className="Loser">
                <div>
                    <h2>Game Over!</h2>
                    <p>The correct word was: {this.props.word}</p>
                    <button onClick={this.props.restart}>Play Again</button>
                </div>
            </div>
        );
    }
}

export default Loser;
