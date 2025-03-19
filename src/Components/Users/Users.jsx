import React, { useEffect, useState } from 'react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="users-container" id="users">
      <h2>Our Community</h2>
      <div className="user-cards">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h4>{user.name}</h4>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
