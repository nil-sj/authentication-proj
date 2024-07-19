import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const RestrictedPage = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
        try {
            const response = await axios.get('http://localhost:8080/auth/current-user', {
                headers: { 'Content-Type': 'application/json' }
            });
            setUser(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                navigate('/login');
            } else {
                setError('An error occurred');
            }
        }
    };

    fetchUser();
}, [navigate]);

  return (
    <div>
      <h1>Restricted Page</h1>
      <span className="ms-auto"><Logout/></span>
      {user ? <p>Welcome, {user.username}!</p> : <p>{error}</p>}
    </div>
  );
};

export default RestrictedPage;