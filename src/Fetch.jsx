import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://api.github.com/users').then(response => response.json()).then(data=>setUsers(data))
    })
  return (

    <div>
    <h1>User List</h1>
    <ul>
        {users.map(user => (
            <li key={user.id}>{user.login} {user.type}  </li>
        ))}
    </ul>
</div>

  )
}

export default Fetch