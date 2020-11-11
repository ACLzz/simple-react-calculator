import React from "react";
import './elements.css'

class Digit extends React.Component {
    render() {
        return (
            <div
                className="digit"
                onClick={this.props.onClick}
            ><p>{this.props.value}</p></div>
        );
    }
}

class Operator extends React.Component {
    render() {
        return (
            <div
                className="op"
                 onClick={this.props.onClick}
            ><p>{this.props.value}</p></div>
        );
    }
}

export {Digit, Operator}
