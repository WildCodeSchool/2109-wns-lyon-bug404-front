//styles and assets
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { SIGNUP } from "../../api/mutations/User";
// styles and assets
import "./Signup.css";
import { useMutation } from "@apollo/client";
const loginIllustration = require("../../assets/signupIllustartion.png");
const loingLogo = require("../../assets/loginLogo.png");

export default function Signup(): JSX.Element {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [failed, setFailed] = useState(true);

  const [doSignup, { data, loading, error }] = useMutation(SIGNUP);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!firstName || !familyName || !email || !password || !confirmPassword) {
      throw setErrorMessage("All fields are required");
    }
    if (password !== confirmPassword) {
      throw setErrorMessage("Passwords don't match");
    }
    try {
      const result = await doSignup({
        variables: {
          firstName,
          familyName,
          email,
          password,
        },
      });
      if (result.data.signup) {
        // success
        localStorage.setItem("user", result.data.signin);
        navigate("/redirect");
      }
    } catch (error: any) {
      throw setErrorMessage(error.message);
    }
  };
  return (
    <div className="login-page h-screen ">
      <Header />
      <div className="flex flex-row  max-w-4xl  mx-auto -mt-20 ">
        <div className="basis-1/2 flex items-center pr-20">
          <img
            className=" object-cover sm:h-72 md:h-96  lg:h-5/6 mx-auto "
            src={loginIllustration}
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <div className="h-44">
            <img
              className="mx-auto  w-auto"
              src={loingLogo}
              alt="logo taskhub"
            />
          </div>
          {/* <form onSubmit={handleSubmit} className="auth-form"> */}
          <div onSubmit={handleSubmit} className="auth-form">
            <label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Name"
                className="form-input"
              />
            </label>
            <label>
              <input
                required
                type="text"
                onChange={(e) => setFamilyName(e.target.value)}
                value={familyName}
                placeholder="LastName"
                className="form-input"
              />
            </label>
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
            {<div>{errorMessage}</div>}
            <button
              // type="submit"
              onClick={handleSubmit}
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
              Signup
            </button>
          </div>

          <div className="mt-1 justify-center flex ">
            <p className="text-sm font-medium ">
              Already a member ? &nbsp;
              <Link
                to="/login"
                className="font-medium text-secondary-100 hover:text-red-00"
              >
                Signin.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
