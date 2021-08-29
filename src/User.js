import React from "react";
import PropTypes from 'prop-types'

const User = (props) => {
    return <li>{props.user.userName} played {props.user.playGameCount} games.</li>
}

User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User;