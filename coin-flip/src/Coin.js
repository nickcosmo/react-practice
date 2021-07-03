import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: 0,
            tails: 0,
            current: null,
            flipping: false,
        };
        this.flip = this.flip.bind(this);
    }
    flip() {
        const newFlip = this.getRand();
        this.setState((state) => {
            return { flipping: true };
        });
        this.setState((state) => {
            const newState = {
                ...state,
                heads: state.heads + (newFlip === 'heads' ? 1 : 0),
                tails: state.tails + (newFlip === 'tails' ? 1 : 0),
                current: newFlip
            }
            return newState;
        });
        setTimeout(() => {
            this.setState((state) => {
                return { flipping: false };
            });
        }, 1000);
    }
    getRand() {
        const choices = ['heads', 'tails'];
        const num = Math.floor(Math.random() * 2);
        return choices[num];
    }
    render() {
        return (
            <div>
                <h1>Lets get flippin!</h1>
                <div className="outer">
                    {this.state.current ? <div className={`coin ${this.state.flipping ? 'coin-flip' : null}`}>{this.state.current}</div> : null}
                </div>
                <button onClick={this.flip}>Flip</button>
                <p>
                    Out of {this.state.heads + this.state.tails} flips you have had {this.state.heads} heads and {this.state.tails} tails.
                </p>
            </div>
        );
    }
}

export default Coin;
