import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//styles and assets
import "./Header.css";
const logo = require("../assets/logo.png");

function Header(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <ul>
          <li
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} alt="task logo" />
          </li>

          <li className="primaryBtn mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="primaryBtn mr-4">
            <Link to="/aboutus">About us</Link>
          </li>
          <li className="secondaryBtn">
            <Link to="/login">Connect</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
