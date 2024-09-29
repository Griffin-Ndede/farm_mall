import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
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

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://farmmall-backend.onrender.com/register/', {
        username: formData.username,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
      });
  
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      // Log the full error response for debugging
      console.error('Registration error:', error.response.data);
      
      // Provide a more informative error message
      if (error.response && error.response.data) {
        // Log specific validation errors if available
        if (error.response.data.password) {
          setError(error.response.data.password[0]); // Display the first error message for the password
        } else {
          setError('Registration failed. Please check your details and try again.');
        }
      } else {
        setError('Registration failed. Please try again later.');
      }
    }
  };
  

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="rounded-xl bg-black w-full max-w-md lg:w-1/3 bg-opacity-25 px-8 sm:px-12 lg:px-16 py-10 shadow-lg backdrop-blur-md">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 font-extrabold text-2xl sm:text-3xl">Farm Mall</h1>
            <span className="text-white text-xs sm:text-sm">Enter details to create an account</span>
          </div>
          <form onSubmit={handleSignup} className="flex flex-col items-center">
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
              <label htmlFor="firstName">First name</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4 w-full text-sm">
              <label htmlFor="lastName">Last name</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4 w-full text-sm">
              <label htmlFor="email">Email</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="email"
                name="email"
                placeholder="john@gmail.com"
                value={formData.email}
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
            <div className="mb-4 w-full text-sm">
              <label htmlFor="password2">Confirm Password</label>
              <input
                className="w-full max-w-xs rounded-3xl font text-black py-2 px-4"
                type="password"
                name="password2"
                placeholder="*********"
                value={formData.password2}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="w-fit max-w-xs rounded-3xl bg-custom-green font text-white py-2 px-4 mb-4">
              Create account
            </button>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <p className="text-xs sm:text-sm">
              Have an account?{' '}
              <Link to="/login" className="text-yellow-500 underline">
                Sign in
              </Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
