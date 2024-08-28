import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-10 mt-12">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-lg font-semibold">
          &copy; 2024 My Website. All rights reserved.{" "}
          <span className="text-sm">Website created by Manish Prajapat</span>
        </p>

        <div className="space-x-4">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>{" "}
          |
          <a href="/contact" className="hover:text-white">
            Contact Us
          </a>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-4">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="text-blue-500 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-blue-400 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-pink-500 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <p className="mt-4">1234 Sirohi, India</p>
        <p>
          Email:{" "}
          <a
            href="mailto: manishprajapat492@gmail.com"
            className="hover:text-white"
          >
            manishprajapat492@gmail.com
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+91" className="hover:text-white">
            6378861900
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
