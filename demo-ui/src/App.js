import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import RestrictedPage from './RestrictedPage';
import Layout from './Layout';
import './App.css';
import { AuthProvider } from './AuthContext';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Layout/>, children: [
        { path: '/', element: <HomePage/>},
        { path: '/login', element: <LoginPage/>},
        { path: '/register', element: <RegisterPage/>},
        { path: '/restricted', element: <RestrictedPage/>}
    ]} 
  ]);

  return (
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  );
}


export default App;