import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePasswordField from '../config/hook';

const Recover = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const passwordField = usePasswordField(setShowPassword);
  const confirmPasswordField = usePasswordField(setShowConfirmPassword);

  return (
    <div className="min-h-screen bg-gray-50 flex md:items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="relative -translate-x-1/2 left-1/2 w-fit flex items-center gap-1">
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
            <h1 className="text-3xl font-medium text-gray-600">Press AI</h1>
        </div>

        <h2 className="text-2xl font-medium text-gray-600 my-3">Forgotten Password?</h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email" 
              className="w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-base placeholder-gray-400"
            />
            <div className='grid grid-cols-2 gap-2 mt-2'>
              <input type="number" placeholder="#Code"  className='no-spinner w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent sm:text-base placeholder-gray-400' />
              <input type="submit" value='Send' className='text-gray-500 border border-gray-500 hover:border-none rounded-lg cursor-pointer hover:bg-gray-400 hover:text-gray-800 transition duration-300' />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-medium text-gray-700 mb-2 font-lobster">
              Enter New Password
            </label>
            <div className="relative" ref={passwordField.ref} onMouseLeave={passwordField.handleMouseLeave} onMouseEnter={passwordField.handleMouseEnter}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                placeholder="Enter New password" 
                className="w-full px-3 sm:px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent pr-10 sm:pr-12  sm:text-base placeholder-gray-400"
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
            <label className="block font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative" ref={confirmPasswordField.ref} onMouseLeave={confirmPasswordField.handleMouseLeave} onMouseEnter={confirmPasswordField.handleMouseEnter}>
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirm-password" 
                placeholder="Confirm new password" 
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent pr-10 sm:pr-12  sm:text-base placeholder-gray-400"
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

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-900 via-gray-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all shadow-md  sm:text-base mt-2 cursor-pointer"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Recover;
