import React, { Component } from 'react';
import './App.css';
import Box from './Box';
class App extends Component {
    static defaultProps = {
        colors: ['aquamarine', 'darkcyan', 'honeydew', 'plum', 'navy', 'indianred', 'chartreuse', 'cornflowerblue'],
    };
    constructor(props) {
        super(props);
        this.state = {
            colors: [],
        };
        this.drawSquares = this.drawSquares.bind(this);
        this.change = this.change.bind(this);
    }
    change(i) {
        let newStateColors = this.state.colors;
        newStateColors.splice(i, 1, this.getColor());
        this.setState((state) => ({
            colors: newStateColors,
        }));
    }
    getColor() {
        const num = Math.floor(Math.random() * this.props.colors.length);
        return this.props.colors[num];
    }
    drawSquares() {
        const colorArr = [];
        const boxes = [];
        for (let i = 0; i < 16; i++) {
            const color = this.getColor();
            colorArr.push(color);
            boxes.push();
        }
        return colorArr;
    }
    componentDidMount() {
        const colors = this.drawSquares();
        this.setState((state) => {
            return {
                colors: colors,
            };
        });
    }
    render() {
        return (
            <div className="App">
                {this.state.colors.map((color, i) => {
                    return <Box key={i} id={i} change={this.change} color={color} />;
                })}
            </div>
        );
    }
}

export default App;
