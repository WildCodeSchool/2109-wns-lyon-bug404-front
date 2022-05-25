import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

import { useMutation } from '@apollo/client';
import { FORGOT_PASSWORD } from '../../api/mutations/User';
const forgotllustration = require('../../assets/forgot-password.png');
const loingLogo = require('../../assets/loginLogo.png');

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sendForgotPassword, { data, loading, error }] =
    useMutation(FORGOT_PASSWORD);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!email) {
      throw setErrorMessage('All fields are required');
    }

    try {
      const result = await sendForgotPassword({
        variables: {
          email
        }
      });
      if (result.data.forgotPassword) {
        // success
        navigate('/redirect');
      }
    } catch (error: any) {
      throw setErrorMessage(error.message);
    }
  };

  return (
    <div className="h-screen landing-page ">
      <Header />
      <div className="flex flex-row  max-w-4xl  mx-auto -mt-20 ">
        <div className="basis-1/2 flex items-center ">
          <img
            className=" object-cover sm:h-72 md:h-96  lg:h-5/6 mx-auto "
            src={forgotllustration}
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

            {error && (
              <p className="text-sm font-medium text-red-500">
                {error.message}
              </p>
            )}

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
              Get new password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
