import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
const redirectImage = require("../../assets/redirect.png");

export const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, []);

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
