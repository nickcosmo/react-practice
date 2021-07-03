import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 'three',
            num2: 'four',
            rolling: false,
        };
        this.roll = this.roll.bind(this);
        this.rolling = this.rolling.bind(this);
    }
    roll() {
        if (!this.state.rolling) {
            this.rolling();
            this.setState({
                num1: this.getRand(),
                num2: this.getRand(),
            });
        }
    }
    rolling() {
        this.setState({ rolling: true });
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    getRand() {
        const num = Math.floor(Math.random() * 6) + 1;
        switch (num) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            default:
                return null;
        }
    }
    render() {
        return (
            <div>
                <div className="RollDice-die-container">
                    <Die rolling={this.state.rolling} num={this.state.num1} />
                    <Die rolling={this.state.rolling} num={this.state.num2} />
                </div>
                <button className="RollDice-btn" onClick={this.roll}>
                    {this.state.rolling ? 'Rolling...' : 'Roll the Dice!'}
                </button>
            </div>
        );
    }
}

export default RollDice;
