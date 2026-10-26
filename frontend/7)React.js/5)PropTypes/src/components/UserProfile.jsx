import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ user}) {
    const { id, name, age = 18, isAdmin = false } = user;


    UserProfile.propTypes = {
        user: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            isAdmin: PropTypes.bool
        }).isRequired
    };

    return (
        <div>
            <h1>ID: {id}</h1>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            {isAdmin ? <p>Admin</p> : <p>User</p>}
        </div>
    );
}

export default UserProfile;
