import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        text: ''
    }

    updateText = (text) => {
        this.setState({
            text: text
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <div className="container">
                    <input type="text" placeholder="Say Something"
                           value={this.state.text}
                           onChange={(e) => this.updateText(e.target.value)}/>
                    <p className="echo">Echo:</p>
                    {this.state.text && (
                        <p>{this.state.text}</p>
                    )
                    }
                </div>
            </div>
        );
    }
}

export default App;
