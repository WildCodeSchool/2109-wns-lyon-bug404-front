import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RESET_PASSWORD } from "../../api/mutations/User";
import Header from "../../components/Header";
const lock = require("../../assets/lock.png");
const star = require("../../assets/star.png");

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);
  const [errorMessage, setErrorMessage] = useState("");
  const [successPassword, setSuccessPassword] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      throw setErrorMessage("All fields are required");
    }
    if (password !== confirmPassword) {
      throw setErrorMessage("Passwords don't match");
    }

    try {
      const result = await resetPassword({
        variables: {
          token,
          reset: {
            password: password,
          },
        },
      });
      console.log(result);
      if (result.data.resetUserPassword) {
        setSuccessPassword(true);
        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    } catch (error: any) {
      throw setErrorMessage(error.message);
    }
  };
  return (
    <div className="h-screen landing-page ">
      <Header />
      {!successPassword ? (
        <div className="container    mx-auto -mt-20 ">
          <div className="h-44 ">
            <img
              className="mx-auto  w-auto h-60"
              src={lock}
              alt="logo taskhub"
            />
          </div>
          <form onSubmit={handleSubmit} className="auth-form ">
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
            <label>
              <input
                required
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                placeholder="Confirm password "
                className="form-input"
              />
            </label>

            {error && (
              <p className="text-sm font-medium text-red-500">
                {error.message}
              </p>
            )}
            {errorMessage && (
              <p className="text-sm font-medium text-red-500">{errorMessage}</p>
            )}

            <button
              //   disabled={loading === true}
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
              Reset password
            </button>
          </form>
        </div>
      ) : (
        <div className="container    mx-auto  ">
          <div className="h-60 ">
            <img
              className="mx-auto  w-auto h-44"
              src={star}
              alt="logo taskhub"
            />
          </div>
          <h3 className="text-center text-lg font-bold ">
            Your password has been successfuly changed
          </h3>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
