import { useEffect } from "react";
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

  useEffect(() => {
    if (token) {
      doConfirmUser({
        variables: { token },
      });
    }
    // setTimeout(() => {
    //   navigate("/");
    // }, 6000);
  }, [token]);

  return (
    <div className="h-screen landing-page ">
      <Header />
      <div className="grid grid-cols-2 gap-4 h-1/2 w-1/2 m-auto">
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
      </div>
    </div>
  );
};
