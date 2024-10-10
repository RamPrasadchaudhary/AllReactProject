import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile(name) {
    const {user}=useContext(UserContext)
    if(!user) return <h1>Not logged in</h1>
  return (
    <div>Profile:{user.username}
        <h2>More Component":{name.name}</h2>
    </div>
  )
}

export default Profile