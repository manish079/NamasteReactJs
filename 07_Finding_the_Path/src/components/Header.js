import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  // let loginBtn = "login";
  // Here we can't use local variable because I need when loginBtn value is changed I want to it immediately update into UI So we need state variable to do this. when state variable is changed it immediately update/re-render the whole component and render new value of loginBtn.

  const [loginBtn, setLoginBtn] = useState("Login");

  //If on every state variable update component is Re-Rendered (Everything is set new) and all stateVariables are initialized with new value(updated) and do update UI. So here const variable changed it initialized with new updated value.

  console.log("Body component Rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          {/* we cannot use anchor tag to navigate to page because it reload whole
          page when we navigate to page */}
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
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
