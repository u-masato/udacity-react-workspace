import React, {Component} from "react";
import PropTypes from 'prop-types'

class AddUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
    }

    changeFirstName = (e) => {
        this.setState({
            firstName: e.target.value.trim()
        })
    }

    changeLastName = (e) => {
        this.setState({
            lastName: e.target.value.trim()
        })
    }

    changeUserName = (e) => {
        this.setState({
            userName: e.target.value.trim()
        })
    }

    hasEmptyForm = () => {
        return this.state.firstName === '' || this.state.lastName === '' || this.state.userName === ''
    }

    existSameUserName = (users) => {
        for (const user of users) {
            if (this.state.userName === user.userName) {
                return true;
            }
        }
        return false;
    }

    clearUser = () => {
        this.setState({
            firstName: '',
            lastName: '',
            userName: '',
        })
    }

    addUser = (users, handler) => {
        if (this.existSameUserName(users)) {
            return;
        }
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName
        }
        handler(newUser);
        this.clearUser();
    }

    render() {

        const {firstName, lastName, userName} = this.state
        const {users, handleAddUser} = this.props

        return <div>
            <p>
                <label>First Name</label>
                <input
                    type='text'
                    value={firstName}
                    placeholder='first name'
                    onChange={this.changeFirstName}
                />
            </p>
            <p>
                <label>Last Name</label>
                <input
                    type='text'
                    value={lastName}
                    placeholder='last name'
                    onChange={this.changeLastName}
                />
            </p>
            <p>
                <label>User Name</label>
                <input
                    type='text'
                    value={userName}
                    placeholder='user name'
                    onChange={this.changeUserName}
                />
            </p>

            {this.existSameUserName(users) &&
            <p className='error'>user name exists already</p>
            }

            <button onClick={() => this.addUser(users, handleAddUser)}
                    className='smallButton'
                    disabled={this.hasEmptyForm()}>Add User
            </button>
        </div>
    }
}

AddUser.propTypes = {
    users: PropTypes.array.isRequired,
    handleAddUser: PropTypes.func.isRequired
}

export default AddUser;