import './App.css';
import react from 'react'
import {Digit, Operator} from './elements'

class Grid extends react.Component {
    renderDigit(i) {
        return (
            <Digit value={i} onClick={() => this.props.addE(i)} />
        );
    }

    renderOperator(i) {
        return (
            <Operator value={i} onClick={() => this.props.operate(i)} />
        );
    }

    render() {
        return (
        <div className="calc-grid">
          <div className="head-row">
              {this.renderOperator("+")}
              {this.renderOperator("-")}
              {this.renderOperator("*")}
              {this.renderOperator("/")}
          </div>
          <div className="calc-row">
              {this.renderDigit("1")}
              {this.renderDigit("2")}
              {this.renderDigit("3")}
          </div>
          <div className="calc-row">
              {this.renderDigit("4")}
              {this.renderDigit("5")}
              {this.renderDigit("6")}
          </div>
          <div className="calc-row">
              {this.renderDigit("7")}
              {this.renderDigit("8")}
              {this.renderDigit("9")}
          </div>
          <div className="calc-row">
              {this.renderDigit(".")}
              {this.renderDigit("0")}
              {this.renderOperator("=")}
          </div>
        </div>
    );
  }
}

class Calculator extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            execLine: "",
            outLine: "0",
            operator: null,
            prevDigit: 0.0
        }

        this.addE = this.addE.bind(this);
        this.operate = this.operate.bind(this);
    }

    addE(v) {
        this.setState({
            execLine: this.state.execLine + v
        })
    }

    operate(op) {
        let resp
        const num = +(this.state.execLine)
        if (num === 0) {
            if (op !== "=") {
                this.setState({
                    operator: op,
                })
            }
            return;
        }

        switch (this.state.operator) {
            case null: case "+":
                resp = this.state.prevDigit + num;
                break;
            case "-":
                resp = this.state.prevDigit - num;
                break;
            case "*":
                resp = this.state.prevDigit * num;
                break;
            case "/":
                resp = this.state.prevDigit / num;
                break;
            default:
                return;
        }

        this.setState({
            prevDigit: resp,
            outLine: resp.toString(),
            execLine: "",
        })

        if (op !== "=") {
            this.setState({
                operator: op,
            })
        }
    }

    render() {
        return (
            <div className="calculator">
                <header className="App-header">
                    Calculator
                </header>
                <body>
                <div className="exec-line">= {this.state.outLine}</div>
                <div className="outline-line">~> {this.state.operator} {this.state.execLine}</div>
                <Grid addE={this.addE} operate={this.operate}/>
                </body>
            </div>
        );
    }
}

export default Calculator;
