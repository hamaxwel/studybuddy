import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Simulate a successful login 
    setError('');
    navigate('/'); // Redirect to the homepage after login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <div className="alert">
            {error}
          </div>
        )}

        <button type="submit">Login</button>
      </form>

      <div className="signup-link">
        <p>Don't have an account? <a href="/sign-up">Sign up here</a></p>
      </div>

      {/* Forgot Password Link */}
      <div className="forgot-password-link">
        <p><a href="/forgot-password">Forgot your password?</a></p>
      </div>
    </div>
  );
};

export default LoginPage;

