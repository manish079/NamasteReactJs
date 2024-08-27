import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = userOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart?.items);

  // State to manage the active link
  const [activeLink, setActiveLink] = useState("home");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div
      className="bg-headerBg-custom-gray px-0 py-2 font-sans shadow-lg sticky w-full top-0 z-50"
      style={{
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <img className="logo w-20" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="flex-grow flex justify-end">
          <ul className="flex items-center gap-6 p-2 font-medium">
            <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link
                to="/"
                className={`${
                  activeLink === "home"
                    ? "font-bold text-button-search-btn"
                    : ""
                } hover:text-button-search-btn`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`${
                  activeLink === "about"
                    ? "font-bold text-button-search-btn"
                    : ""
                } hover:text-button-search-btn`}
                onClick={() => handleNavClick("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`${
                  activeLink === "contact"
                    ? "font-bold text-button-search-btn"
                    : ""
                } hover:text-button-search-btn`}
                onClick={() => handleNavClick("contact")}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className={`${
                  activeLink === "grocery"
                    ? "font-bold text-button-search-btn"
                    : ""
                } hover:text-button-search-btn`}
                onClick={() => handleNavClick("grocery")}
              >
                Grocery
              </Link>
            </li>
            <li className="relative flex items-center">
              <Link to="/cart" className="flex items-center">
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
              className="bg-button-search-btn text-white px-5 py-1 ml-2 rounded-lg"
              onClick={() => {
                setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
            >
              {loginBtn}
            </button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
