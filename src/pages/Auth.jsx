import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";

function Auth() {
  const [register, setRegister] = useState(false);

  const toggleForm = () => setRegister(!register);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/images/auth_bg.jpg')` }}
    >
      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Glassmorphism container */}
      <div className="relative z-10 backdrop-blur-lg bg-white/20 border border-white/30 shadow-lg rounded-lg p-8 w-full max-w-md text-white">
        <div className="flex flex-col items-center mb-4">
          <CgProfile size={48} />
        </div>
        <h2 className="text-3xl font-semibold text-center mb-6 drop-shadow-lg">
          {register ? 'Register' : 'Login'}
        </h2>

        <form className="space-y-4">
          {register && (
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-white/70 border border-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-white/70 border border-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-white/70 border border-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:opacity-90 py-2 rounded-lg font-semibold shadow-lg transition"
          >
            {register ? 'Register' : 'Login'}
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          {register ? (
            <p>
              Already a user?{' '}
              <button onClick={toggleForm} className="text-blue-300 hover:underline">
                Login
              </button>
            </p>
          ) : (
            <p>
              New user?{' '}
              <button onClick={toggleForm} className="text-blue-300 hover:underline">
                Register
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
