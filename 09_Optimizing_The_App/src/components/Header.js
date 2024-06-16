import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = userOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>

          <button
            className="login-btn"
            onClick={() => {
              // loginBtn = "logout";
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
              console.log(loginBtn);
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
