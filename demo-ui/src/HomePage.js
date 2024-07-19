import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>This is the home page. Navigate to any of the following pages:</p>
    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
  </div>
);

export default HomePage;