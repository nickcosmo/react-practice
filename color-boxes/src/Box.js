import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.change(this.props.id);
    }
    render() {
        return <div className="Box" data-id={this.props.id} onClick={this.handleChange} style={{ backgroundColor: this.props.color }}></div>;
    }
}

export default Box;
