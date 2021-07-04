import React, { Component } from 'react';

class ButtonArea extends Component {
    constructor(props) {
        super(props);
        this.handleGuess = this.handleGuess.bind(this);
    }
    handleGuess(e) {
        this.props.handleGuessParent(e);
    }
    render() {
        return this.props.letters.split('').map((ltr, i) => (
            <button key={ltr + i} value={ltr} onClick={this.handleGuess} disabled={this.props.guessed.has(ltr)}>
                {ltr}
            </button>
        ));
    }
}

export default ButtonArea;
