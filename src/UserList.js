import React, {Component} from "react";
import PropTypes from 'prop-types'
import User from "./User";

class UserList extends Component {

    render() {
        const {users} = this.props;
        return <div>
            <h1>Users</h1>
            <ol>
                {users.map(user => (
                    <User key={user.userName} user={user}/>
                ))}
            </ol>
        </div>
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;