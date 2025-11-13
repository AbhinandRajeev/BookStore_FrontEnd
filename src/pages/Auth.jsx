import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { registerUserAPI, loginUserAPI, GoogleloginUserAPI } from '../services/allAPIs';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Auth({ register }) {
  //const [register, setRegister] = useState(false);

  // const toggleForm = () => setRegister(!register);

  const navigate = useNavigate();


  const [userData, setUserData] = useState({ username: '', email: '', password: '' })

  const handleRegister = async () => {
    console.log(userData);

    if (!userData.username || !userData.email || !userData.password) {
      //alert("Please fill the form")

      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else {
      // call register API
      try {
        const response = await registerUserAPI(userData);
        console.log(response);
        if (response.status === 201) {
          //alert("Resistration Successfull")
          toast.success('Resistration Successfull', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          // set the fields empty after registering
          setUserData({ username: '', email: '', password: '' })

          setTimeout(() => {
            navigate('/login')
          }, 4000)

        }
        else {
          //alert('Registration failed')

          toast.success('User already exists...', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(response.response.data.message)
        }
      }
      catch (err) {
        console.log(err)
      }
    }

  }

  const handleLogin = async () => {
    console.log(userData);

    if (!userData.email || !userData.password) {
      //alert("Please fill the form")

      toast.warn('Please fill the form', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else {
      // call Login API
      try {
        const response = await loginUserAPI(userData);
        console.log(response);
        if (response.status === 201 || response.status === 200) {

          sessionStorage.setItem('userDetails', JSON.stringify(response.data.user))

          toast.success('LogIn Successfull', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          //navigate('/login')
          if (response.data.user.role == 'BookStoreAdmin') {
            setTimeout(() => {
              navigate('/admin-home')
            }, 4000)
          }
          else {
            setTimeout(() => {
              navigate('/')
            }, 4000)
          }

        }
        else {
          // alert('Login  failed')
          toast.error('Invalid user details', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log(response.response.data.message)
        }
      }
      catch (err) {
        console.log(err)
      }
    }

  }

  const handleGoogleLogin = async (credentialResponse) => {
    console.log("Google Login", credentialResponse)
    const decode = jwtDecode(credentialResponse.credential)
    console.log(decode);

    const response = await GoogleloginUserAPI({ email: decode.email, password: "googlepassword", username: decode.name, profile: decode.picture })
    console.log(response);
  }

  return (
    <>
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
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                />
              </div>
            )}

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-white/70 border border-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 rounded-lg bg-white/30 placeholder-white/70 border border-white/40 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </div>

            {register ?
              <button
                type="button"
                className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:opacity-90 py-2 rounded-lg font-semibold shadow-lg transition"
                onClick={handleRegister}
              >
                Register
              </button>

              : <button
                type="button"
                className="w-full bg-linear-to-r from-blue-500 to-indigo-600 hover:opacity-90 py-2 rounded-lg font-semibold shadow-lg transition"
                onClick={handleLogin}
              >
                Login
              </button>}

            <div>
              <GoogleLogin onClick={() => handleGoogleLogin(credentialResponse)}
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>

          </form>

          <div className="mt-4 text-center text-sm">
            {register ? (
              <p>
                Already a user?{' '}
                <button onClick={() => navigate("/login")}
                  className="text-blue-300 hover:underline">
                  Login
                </button>
              </p>
            ) : (
              <p>
                New user?{' '}
                <button onClick={() => navigate("/register")}
                  className="text-blue-300 hover:underline">
                  Register
                </button>
              </p>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Auth;
