// frontend/src/components/UserList.js
import React, { useState, useEffect } from 'react'; 
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.age} - {user.gender} - {user.occupation} - {user.city} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
