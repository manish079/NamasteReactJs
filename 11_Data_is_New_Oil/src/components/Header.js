import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = userOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="bg-teal-100 flex justify-between mx-1 px-10">
      <div className="w-20">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex items-center gap-[30px] p-2 font-[500]">
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
