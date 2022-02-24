import { useNavigate } from "react-router-dom";
const profileImage = require("../assets/aurelien.png");

export const Nav = ({ page }: any) => {
  const navigate = useNavigate();
  const user = {
    firstName: "Aurélien",
    familyName: "Leygues",
  };
  return (
    <div className="nav  h-20 px-8 flex justify-between items-center ">
      <div className="pageTitle text-3xl font-bold">
        <h2>{page}</h2>
      </div>
      <div className="profileSection flex flex-row items-center">
        <div className="userName">
          <h3 className="text-base font-medium">
            {user.firstName} {user.familyName}
          </h3>
        </div>
        <div
          className="flex-1 min-w-0 mx-auto mt-4 cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="h-16 w-16 ml-2" src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
};
