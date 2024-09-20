import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  // handles storage of input data for each input field
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  // handles input change for each input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <>
    <div className="flex h-screen w-full items-center justify-center bg-farm2 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-black w-full max-w-md lg:w-1/3 bg-opacity-25 px-8 sm:px-12 lg:px-16 py-10 shadow-lg backdrop-blur-md">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 font-extrabold text-2xl sm:text-3xl">Farm Mall</h1>
            <span className="text-white text-xs sm:text-sm">Enter details to create an account</span>
          </div>
          <form action="#" className="flex flex-col items-center">
            <div className="mb-4 w-full text-sm">
              <label htmlFor='firstname'>First name</label>
              <input 
                className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md" 
                type="text" 
                name="firstName" 
                placeholder="John"
                value={formData.firstName} 
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 w-full text-sm">
              <label htmlFor='lastname'>Last name</label>
              <input 
                className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md" 
                type="text" 
                name="lastName" 
                placeholder="Doe" 
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-4 w-full text-sm">
              <label htmlFor='email'>Email</label>
              <input 
                className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md" 
                type="text" 
                name="email" 
                placeholder="john@gmail.com" 
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4 w-full text-sm">
              <label htmlFor='password'>Password</label>
              <input 
                className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white placeholder-slate-200 placeholder-opacity-50 shadow-lg outline-none backdrop-blur-md" 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mt-8 flex justify-center w-full max-w-xs text-lg text-black mb-10">
              <button 
                type="submit" 
                className="w-full max-w-xs rounded-3xl border-none bg-custom-green bg-opacity-25 px-4 py-2 text-center text-white text-md placeholder-slate-200 shadow-lg outline-none backdrop-blur-md">
                  Create account
              </button>
            </div>
            <p className='text-xs sm:text-sm'>Have an account? 
                <Link to="/login" className="text-yellow-500 underline">
                    Sign in
                </Link>.
              </p>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Signup