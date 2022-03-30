import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { CONFIRM_USER } from "../../api/mutations/User";
import { useMutation } from "@apollo/client";
const confirmSuccess = require("../../assets/confirmSuccess.png");
const confirmError = require("../../assets/confirmError.png");

export const Confirm = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [doConfirmUser, { data, loading, error }] = useMutation(CONFIRM_USER);
  const [tokenIsValid, setTokenIsValid] = useState(false);

  useEffect(() => {
    if (token) {
      doConfirmUser({
        variables: { token },
      });
    }

    setTimeout(() => {
      navigate("/login");
    }, 6000);
  }, [token]);

  useEffect(() => {
    if (data) {
      setTokenIsValid(data.confirmUser);
    }
  }, [data]);

  return (
    <div className="h-screen landing-page ">
      <Header />
      <div className="grid grid-cols-2 gap-4 h-1/2 w-1/2 m-auto">
        <div>
          <img
            className="object-cover sm:h-72 md:h-96  lg:h-5/6 mx-auto"
            src={tokenIsValid ? confirmSuccess : confirmError}
            alt=""
          />
        </div>

        <div className="flex justify-center justify-items-center m-auto">
          {" "}
          <h3 className="text-center text-lg font-bold h-1/3">
            {tokenIsValid ? (
              <>Your mail is confirmed, you can now log with your new account</>
            ) : (
              <>
                <p className="text-xl">404</p> NOT FOUND
              </>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};
