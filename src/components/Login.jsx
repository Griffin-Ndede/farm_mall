import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.farmmall.co.ke/login/', {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        // Store token in local storage or state management solution
        localStorage.setItem('token', response.data.token);
        alert('Login successful');
        navigate('/dashboard'); // Redirect to dashboard or another page
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error);

      if (error.response && error.response.data) {
        setError(error.response.data.non_field_errors?.[0] || 'Invalid username or password.');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-xl bg-black w-full max-w-md lg:w-1/3 bg-opacity-25 px-8 sm:px-12 lg:px-16 py-10 shadow-lg backdrop-blur-md">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 font-extrabold text-2xl sm:text-3xl">Farm Mall</h1>
            <span className="text-white text-xs sm:text-sm">Enter your credentials to log in</span>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col items-center">
            <div className="mb-4 w-full text-sm">
              <label htmlFor="username">Username</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 w-full text-sm">
              <label htmlFor="password">Password</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="password"
                name="password"
                placeholder="*********"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="w-fit max-w-xs rounded-3xl bg-custom-green font text-white py-2 px-4 mb-4">
              Log In
            </button>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <p className="text-xs sm:text-sm">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-yellow-500 underline">
                Sign up
              </Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
