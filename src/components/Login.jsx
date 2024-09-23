import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api-token-auth/', {
        username: email,
        password: password,
      });

      // Assuming the backend returns the token on success
      const token = response.data.token;

      // Store token in localStorage (or any other storage mechanism)
      localStorage.setItem('token', token);

      // Redirect to a different page after successful login
      navigate('/dashboard');
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-farm bg-cover bg-no-repeat">
        <div className="rounded-xl bg-black w-full max-w-md lg:w-1/3 bg-opacity-25 px-8 sm:px-12 lg:px-16 py-10 shadow-lg backdrop-blur-md">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 font-extrabold text-2xl sm:text-3xl">Farm Mall</h1>
              <span className="text-white text-xs sm:text-sm">Enter Login Details</span>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <div className="mb-4 w-full text-sm">
                <input
                  className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="id@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4 w-full text-sm">
                <input
                  className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  name="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="mt-8 flex justify-center w-full max-w-xs text-lg text-black mb-10">
                <button
                  type="submit"
                  className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                >
                  Login
                </button>
              </div>

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <p className="text-xs sm:text-sm">
                Don't have an account? <Link to="/signup" className="text-yellow-500 underline">Register</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
