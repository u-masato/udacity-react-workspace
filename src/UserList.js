import React, {Component} from "react";
import PropTypes from 'prop-types'
import User from "./User";

class UserList extends Component {

    render() {
        const {users} = this.props;
        return <div>
            <ol>{users.map(user => {return <User key={user.userName} user={user}/>})}</ol>
        </div>
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;