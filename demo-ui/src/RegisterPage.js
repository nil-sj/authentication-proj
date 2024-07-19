import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ username: '', password: '', verifyPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/auth/register', form, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        console.log('Registration successful', response.data);
        navigate('/login');
    } catch (error) {
        if (error.response) {
            setError(error.response.data);
        } else {
            setError('An error occurred');
        }
    }
};

  return (
    <div>
      <div className="mb-4">
      <h1>Register Page</h1>
      </div>
      <div style={{ maxWidth: '300px'}}>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
        />
        </div>
        <div className="mb-3">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        </div>
        <div className="mb-3">
        <input
          className="form-control"
          type="password"
          name="verifyPassword"
          placeholder="Verify Password"
          value={form.verifyPassword}
          onChange={handleChange}
        />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RegisterPage;
