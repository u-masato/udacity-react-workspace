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

    onSend = (e) => {
        e.preventDefault();
        const message = {
            username: this.props.username,
            text: this.state.text,
        }
        this.props.sendHandler(message);
    }

    isDisabled = () => {
        return this.state.text === '';
    }

    render() {
        const {username, sendHandler} = this.props;

        return (
            <div>
                <form onSubmit={this.onSend} className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your message..."
                           value={this.state.text} onChange={this.changeText}
                    />
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
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