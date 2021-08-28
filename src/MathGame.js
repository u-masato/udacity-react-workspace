import React, {Component} from "react";
import './App.css';


class MathGame extends Component {

    state = {
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        proposedAnswer: 0
    }

    constructor(props) {
        super(props);
        const values = this.makeValue();
        this.state = {
            value1: values[0],
            value2: values[1],
            value3: values[2],
            proposedAnswer: values[3]
        }
    }

    makeValue = () => {
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
        return [value1, value2, value3, proposedAnswer]
    }

    updateValue = () => {
        const values = this.makeValue();

        this.setState({
            value1: values[0],
            value2: values[1],
            value3: values[2],
            proposedAnswer: values[3],
        })
    }

    checkAnswer = (isTrue, handler) => {
        const left = this.state.value1 + this.state.value2 + this.state.value3;
        const isEqual = left === this.state.proposedAnswer;
        handler(isEqual === isTrue)
        this.updateValue();
    }

    equation = () => {
        return `${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`
    }

    render() {
        const {handler} = this.props;

        return (
            <div className="game">
                <h2>Mental Math</h2>
                <div className="equation">
                    <p className="text">{this.equation()}</p>
                </div>
                <button onClick={() => this.checkAnswer(true, handler)}>True</button>
                <button onClick={() => this.checkAnswer(false, handler)}>False
                </button>
            </div>
        )
    }
}

export default MathGame;