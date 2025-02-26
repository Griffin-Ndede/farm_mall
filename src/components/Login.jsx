import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Hero from './Hero';
import BASE_URL from '../config';
import UserContext from '../Context/UserContext';

function Login() {
  const {login} = useContext(UserContext)
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '' 
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${BASE_URL}/login/`, formData);
  
      if (response.status === 200) {
        const { token, user } = response.data; // Extract token and user data
  
        localStorage.setItem("token", token); 
        login(user, token); // Store in context
  
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
  ;

  return (
    <div className='flex h-screen'>
      <Hero/>
      <div className="w-fit rounded-3xl h-fit shadow-3xl items-center mx-auto md:my-52 p-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">Welcome back <span className='text-custom-green'>FarmMall</span></h1>
          <p>Enter your credentials to log in</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-10">
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-3xl outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border-gray-300 rounded text-green-600 focus:ring-green-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div> */}
            <a href="#" className="text-sm font-medium text-custom-green hover:text-green-600">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-1/3 mx-auto py-3 text-white bg-custom-green rounded-3xl font-medium gap-2 hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
          >
            Login
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-center text-sm">
            Don&apos;t have an account? <Link to="/register" className="text-custom-green">Sign up</Link>
          </p>
        </form>
      </div>
    </div>

  );
}

export default Login;
