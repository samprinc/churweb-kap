import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';  // Import the CSS file

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const isAdmin = email === 'admin@church.com' && password === 'admin123';
      const userData = { email, isAdmin };
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      navigate(isAdmin ? '/admin' : '/dashboard');
    } else {
      alert('Fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="register-text">
        Don't have an account?{' '}
        <Link to="/register" className="register-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
