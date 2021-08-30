import React, {Component} from "react";
import PropTypes from 'prop-types';

class InputSender extends Component {

    state = {
        text: ''
    }

    changeText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    send = (e, username, handler) => {
        e.preventDefault();
        e.stopPropagation();
        const message = {
            username: username,
            text: this.state.text,
        }
        handler(message);
    }

    isDisabled = () => {
        return this.state.text === '';
    }

    render() {
        const {username, sendHandler} = this.props;

        return (
            <div>
                <form className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your message..."
                           value={this.state.text} onChange={this.changeText}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}
                                onClick={(e) => this.send(e, username, sendHandler)}>
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

InputSender.propTypes = {
    username: PropTypes.string.isRequired,
    sendHandler: PropTypes.func.isRequired
}

export default InputSender;