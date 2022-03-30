import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import { CONFIRM_USER } from "../../api/mutations/User";
import { useMutation } from "@apollo/client";
const redirectImage = require("../../assets/redirect.png");

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

    // setTokenIsValid(data);
    // setTimeout(() => {
    //   navigate("/");
    // }, 6000);
  }, [token]);

  useEffect(() => {
    if (data) {
      setTokenIsValid(data.confirmUser);
    }
  }, [data]);

  return (
    <div className="h-screen landing-page ">
      <Header />
      {tokenIsValid ? <p>token valid</p> : <p>non valid</p>}
      {/* <div className="grid grid-cols-2 gap-4 h-1/2 w-1/2 m-auto">
        <div>
          <img className="cover" src={redirectImage} alt="" />
        </div>

        <div className="flex justify-center justify-items-center m-auto">
          {" "}
          <h3 className="text-center text-lg font-bold h-1/3">
            A confirmation mail has been sent to you, please confirm your email
            address
          </h3>
        </div>
      </div> */}
    </div>
  );
};
