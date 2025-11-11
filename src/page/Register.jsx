import { Eye, EyeClosed, Moon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePasswordField from '../config/hook';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  const passwordField = usePasswordField(setShowPassword);
  const confirmPasswordField = usePasswordField(setShowConfirmPassword);

  return ( 
    <div className={`min-h-screen flex md:items-center justify-center px-4 py-24 sm:px-6 lg:px-8 transition duration-300 ${dark ? 'bg-gray-50' : 'bg-gradient-to-r from-gray-950 via-gray-950 to-regal-blue'}`}>
      <Moon className="fixed top-6 right-6 w-6 h-6 text-yellow-400 cursor-pointer select-none" onClick={() => setDark(!dark)} />
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-4 relative -translate-x-1/2 left-1/2 w-fit flex items-center gap-1">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-17 h-17" 
                viewBox="-5 25 100 100"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#0b47c6ff" />
                        <stop offset="100%" stop-color="#8ee40cff" />
                    </linearGradient>
                </defs>

                <path 
                    d="M 30 30 L 50 50 L 70 30 Q 75 25 80 30 L 85 35 Q 90 40 85 45 L 65 65 L 85 85 Q 90 90 85 95 L 80 100 Q 75 105 70 100 L 50 80 L 30 100 Q 25 105 20 100 L 15 95 Q 10 90 15 85 L 35 65 L 15 45 Q 10 40 15 35 L 20 30 Q 25 25 30 30 Z" 
                    fill="url(#logoGradient)"
                />
            </svg>
            <h1 className={`text-3xl font-medium ${dark ? 'text-gray-600' : 'text-gray-400'}`}>Press AI</h1>
        </div>

        {/* Google Sign-In Button */}  
        <button className={`w-full border border-gray-400 rounded-lg py-2.5 sm:py-3 px-4 mb-8 flex items-center justify-center transition-colors shadow-sm cursor-pointer transition duration-300 ${dark ? 'bg-white hover:bg-gray-50' : ''}`}>
          <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className={`font-medium sm:text-base ${dark ? 'text-gray-700' : 'text-gray-300'}`}>Continue with Google</span>
        </button>

        <div className={`w-full border border-gray-300 mb-4 ${dark ? 'border-gray-300' : 'border-gray-500'}`}></div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className={`block font-medium mb-2 ${dark ? 'text-gray-700' : 'text-gray-100'}`}>
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email" 
              className={`w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-base placeholder-gray-400 ${dark ? '' : 'text-gray-100 bg-black'}`}
            />
          </div>

          {/* Password Field */}
          <div>
            <label className={`block font-medium mb-2 ${dark ? 'text-gray-700' : 'text-gray-100'}`}>
              Password
            </label>
            <div className="relative" ref={passwordField.ref} onMouseLeave={passwordField.handleMouseLeave} onMouseEnter={passwordField.handleMouseEnter}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Enter password" 
                className={`w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-base placeholder-gray-400 ${dark ? '' : 'text-gray-100 bg-black'}`}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer select-none"
              > 
                {!showPassword ? <Eye className='w-5 h-5' /> : <EyeClosed className='w-5 h-5' />}
              </button>
            </div>
          </div>

          {/* Confirm New Password Field */}
          <div>
            <label className={`block font-medium mb-2 ${dark ? 'text-gray-700' : 'text-gray-100'}`}>Confirm New Password</label>
            <div className="relative" ref={confirmPasswordField.ref} onMouseLeave={confirmPasswordField.handleMouseLeave} onMouseEnter={confirmPasswordField.handleMouseEnter}>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirm-password" 
                placeholder="Confirm new password" 
                className={`w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-base placeholder-gray-400 ${dark ? '' : 'text-gray-100 bg-black'}`}
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer select-none"
              >
                {!showConfirmPassword ? <Eye className='w-5 h-5' /> : <EyeClosed className='w-5 h-5' />}
              </button>
            </div>
          </div>

          {/* "Already have an account?" Text */}
          <div className="flex items-center justify-between text-blue-700">
            <p>Already have an account? </p>
            <p onClick={() => navigate('/login')} className='cursor-pointer select-none hover:underline'>Login</p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className={`w-full bg-gradient-to-r text-white py-3 px-6 rounded-lg font-medium transition-all shadow-md sm:text-base mt-2 cursor-pointer ${dark ? 'from-blue-900 via-gray-500 to-green-600' : 'from-blue-950 via-blue-950 to-green-900 '}`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
