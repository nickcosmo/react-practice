import React, { Component } from 'react';
import './GameEnd.css';

class GameEnd extends Component {
    render() {
        return (
            <div className="GameEnd">
                <div>
                    {this.props.winner ? <h2>You Win!</h2> : <h2>Game Over!</h2>}
                    <p>The correct word was: {this.props.word}</p>
                    <button onClick={this.props.restart}>Play Again</button>
                </div>
            </div>
        );
    }
}

export default GameEnd;
