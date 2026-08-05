import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Style/login.css';

const getApiBaseUrl = () => {
  const configuredBase = process.env.REACT_APP_API_BASE_URL || process.env.REACT_APP_BOOKS_API_URL;
  if (configuredBase) {
    return configuredBase.replace(/\/$/, '');
  }

  return process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';
};

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const endpoint = isSignUp ? '/auth/signup' : '/auth/login';
      const apiBaseUrl = getApiBaseUrl();
      const response = await axios.post(`${apiBaseUrl}${endpoint}`, {
        email: email.trim().toLowerCase(),
        password,
      });

      if (response.data?.success) {
        onLogin(
          response.data.user?.email || email.trim().toLowerCase(),
          response.data.user?.role || 'user',
          response.data.user?.id ?? null
        );
        navigate('/Home');
        return;
      }

      setError(response.data?.message || 'Authentication failed.');
    } catch (requestError) {
      if (!requestError?.response) {
        setError('Cannot connect to the server. Make sure the backend is running.');
      } else {
        setError(requestError.response.data?.message || 'Authentication failed.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-title">Library Login</h1>
        <p className="login-subtitle">{isSignUp ? 'Create a new account' : 'Sign in to continue'}</p>

        <label className="login-label" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          className="login-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label className="login-label" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="login-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error ? <p className="login-error">{error}</p> : null}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Log In'}
        </button>

        <button
          type="button"
          className="login-button"
          style={{ marginTop: '0.75rem', backgroundColor: '#4b5563' }}
          onClick={() => {
            setIsSignUp((prev) => !prev);
            setError('');
          }}
        >
          {isSignUp ? 'Switch to Login' : 'Create an account'}
        </button>
      </form>
    </div>
  );
}
