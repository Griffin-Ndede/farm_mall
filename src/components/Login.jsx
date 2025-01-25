import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Hero from './Hero';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.farmmall.co.ke/login/', formData);

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        Swal.fire({
          title: 'Success',
          text: 'Login successful',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/dashboard');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.non_field_errors?.[0] || 'Login failed. Please try again.';
      setError(errorMessage);
      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <div className='flex h-screen justify-flex-col lg:flex-row'>
      <Hero/>
        {/* <div className="flex h-screen items-center justify-center"> */}
      <div className="w-full  rounded-3xl  px-8 py-10 h-screen items-center ">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold sm:text-3xl mb-4">Welcome to Farm Mall</h1>
          <p className="text-sm">Enter your credentials to log in</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 text-black border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-300 rounded text-green-600 focus:ring-green-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-custom-green hover:text-green-600">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 text-white bg-custom-green rounded-3xl font-medium gap-2 hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            Sign in
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
    // </div>

  );
}

export default Login;
