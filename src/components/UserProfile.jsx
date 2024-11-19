import React, { useContext } from 'react'
import { userData } from './UserContext'

const UserProfile = () => {
    const { user, setUser } = useContext(userData);
    return (
        <div><h1>UserProfile</h1>
            {user ? (
                <p>{user.name} is {user.age} year's old.</p>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    )
}

export default UserProfile