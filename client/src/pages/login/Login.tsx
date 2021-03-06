import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SIGNIN } from '../../api/mutations/User';
//components
import Header from '../../components/Header';
import { useAuth } from '../../hooks/auth.hook';
//styles and assets
import './Login.css';
const loginIllustration = require('../../assets/loginIllustration.png');
const loingLogo = require('../../assets/loginLogo.png');

export default function Login(): JSX.Element {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFailed(false);
    setLoading(true);
    if ((await signin(email, password)) === true) {
      navigate('/dashboard');
      return;
    } else {
      setFailed(true);
    }
    setLoading(false);
  };

  return (
    <div className="login-page h-screen ">
      <Header />
      <div className="flex flex-row  max-w-4xl  mx-auto -mt-20 ">
        <div className="basis-1/2 flex items-center ">
          <img
            className=" object-cover sm:h-72 md:h-96  lg:h-5/6 mx-auto "
            src={loginIllustration}
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <div className="h-44">
            <img
              className="mx-auto  w-auto h-44"
              src={loingLogo}
              alt="logo taskhub"
            />
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <label>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email "
                className="form-input"
              />
            </label>
            <label>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password "
                className="form-input"
              />
            </label>
            {failed && (
              <p className="text-sm font-medium text-red-500">
                Something went wrong, please retry again
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm my-2 mt-8">
                <Link
                  to="/forgot-password"
                  className="font-medium text-black hover:text-red-00"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <button
              disabled={loading === true}
              type="submit"
              className="relative w-full flex justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-100 hover:bg-red-100 hover:text-red-400 hover:border-secondary-100"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-white group-hover:text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </form>

          <div className="mt-1 justify-center flex ">
            <p className="text-sm font-medium ">
              Not yet a member ? &nbsp;
              <Link
                to="/signup"
                className="font-medium text-secondary-100 hover:text-red-00"
              >
                Sign up.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
