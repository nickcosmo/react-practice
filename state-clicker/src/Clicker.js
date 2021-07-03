import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            winner: false,
        };
        this.IncreaseNum = this.IncreaseNum.bind(this);
    }
    IncreaseNum() {
        this.setState((state, props) => ({
            number: state.number + 1,
        }));
    }
    render() {
        let element;
        if (this.state.number < 10) {
            element = <button onClick={this.IncreaseNum}>Increase Number</button>;
        } else {
            element = <h2>YOU WIN!</h2>;
        }
        return (
            <div>
                <h1>Number is: {this.state.number}</h1>
                {element}
            </div>
        );
    }
}

export default Clicker;
