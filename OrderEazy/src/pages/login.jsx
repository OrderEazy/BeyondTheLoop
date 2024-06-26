// Import React and necessary hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/sample1.jpg'; // Ensure this path is correct for your project

// Firebase imports
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Import your Firebase configuration here
import '.././firebase/firebase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle authentication errors

  const handleSignIn = async (event) => {
    event.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // On successful sign in, navigate to the dashboard
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle errors here, such as displaying an error message
        const errorMessage = error.message;
        setError(`Failed to sign in: ${errorMessage}`);
      });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className="w-full max-w-xl space-y-8 bg-white p-20 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900">Sign in to OrderEazy</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Your ultimate food destination</p>
          {/* Display error message if authentication fails */}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>
          <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-tangerine hover:bg-mid focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mid transition duration-150 ease-in-out">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
