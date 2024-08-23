import { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector, userSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = userOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //selector is a hook
  //Subscribing the store using a selector

  const cartItems = useSelector((store) => store.cart?.items);
  // console.log(cartItems);

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
          {/* <li className="px-4 font-bold  text-xl">
            <Link to="/Cart" className="">
              <FiShoppingCart />
              {cartItems?.length}
            </Link>
          </li> */}
          <li className="relative px-4 ">
            <Link to="/Cart" className="flex items-center">
              <div className="relative font-bold text-xl">
                <FiShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                  {cartItems?.length}
                </span>
              </div>
              <span className="ml-2">Cart</span>
            </Link>
          </li>

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
