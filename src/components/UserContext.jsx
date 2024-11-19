import React, { children, createContext, useState } from 'react'

export const userData = createContext()
const UserContext = ({children}) => {

    const [user,setUser] = useState({name:'Vishnu',age:23});

  return (
    <userData.Provider value={{user,setUser}}>
        {children}
    </userData.Provider>

  )
}

export default UserContext