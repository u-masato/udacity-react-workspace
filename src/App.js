import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MathGame from './MathGame'
import Score from "./Score";

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
    state = {
        numQuestions: 0,
        numCorrect: 0
    }

    // constructor() {
    //     super();
    //     this.setState({
    //         proposedAnswer: Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3,
    //     })
    // }
    // calcProposedAnswer = () => {
    //     return Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    // }

    handlerAnswer = (isCorrect) => {
        if (isCorrect) {
            this.setState((current) => ({
                numCorrect: current.numCorrect + 1
            }));
        }
        this.setState((current) => ({
            numQuestions: current.numQuestions + 1
        }));
        console.log(isCorrect);
        console.log(this.state);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <MathGame handler={this.handlerAnswer}></MathGame>
                <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}></Score>
            </div>
        );
    }
}

export default App;
