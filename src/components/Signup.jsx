import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Hero from './Hero';
import BASE_URL from '../config';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
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

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/register/`, {
        username: formData.username,
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 201) {
        navigate('/login');
        successAlert();
      }
    } catch (error) {
      console.error('Registration error:', error.response.data);
      failureAlert();

      if (error.response && error.response.data) {
        if (error.response.data.password) {
          setError(error.response.data.password[0]);
        } else {
          setError('Registration failed. Please check your details and try again.', error.response.data);
        }
      } else {
        setError('Registration failed. Please try again later.', error.response.data);
      }
    }
  };

  const successAlert = () => {
    Swal.fire({
      title: 'Success',
      text: 'Registration successful',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  const failureAlert = () => {
    Swal.fire({
      title: 'Error',
      text: 'Registration failed. Please try again later.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="flex h-screen">
      <div className="w-fit rounded-3xl h-fit shadow-3xl items-center mx-auto p-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">Welcome to <span className="text-custom-green">FarmMall</span></h1>
          <p>Enter details to create an account</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-10">
          <div>
            <label className="block mb-2 text-sm font-medium">Username</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="Username"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">First Name</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last Name</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-1/3 mx-auto py-3 text-white bg-custom-green rounded-3xl font-medium gap-2 hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            Create account
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-center text-sm">
            Already have an account? <Link to="/login" className="text-custom-green">Sign in</Link>
          </p>
        </form>
      </div>
      <Hero />
    </div>
  );
}

export default Signup;
