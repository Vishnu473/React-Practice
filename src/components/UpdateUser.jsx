import React,{useContext} from 'react'
import { userData } from './UserContext'

const UpdateUser = () => {

    const {user,setUser} = useContext(userData);
  return (
    <div>
        <h1>UpdateUser</h1>
        <button onClick={() => setUser({name:'Tarini '+user.name+' Kishore', age:user.age+1})}>Update User Data</button>
        {user ? (
                <p>{user.name} is {user.age} year's old.</p>
            ) : (
                <p>No user data available</p>
            )}
    </div>
  )
}

export default UpdateUser