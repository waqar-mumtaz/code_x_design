import { Link } from "react-router-dom";
import { motion } from "motion/react";
import logo from "../../assets/imgs/CXD-Logo-Blue-black.png";

const Header = () => {
  return (
    <nav className="my-container  flex items-center mt-5">
      <img width={110} src={logo} alt="Logo" />

      <div className="flex items-center gap-6 ml-auto">
        <div className="hidden lg:flex gap-11 lato-bold items-center">
          <Link className="text-blue-700" to="/">
            Home
          </Link>
          <Link
            className="hover:text-blue-700 transition-colors duration-500"
            to="#"
          >
            About Us
          </Link>
          <Link
            className="hover:text-blue-700 transition-colors duration-500"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="hover:text-blue-700 transition-colors duration-500"
            to="#"
          >
            Our Work
          </Link>
          <Link
            className="hover:text-blue-700 transition-colors duration-500"
            to="#"
          >
            Our Team
          </Link>
          <Link
            className="hover:text-blue-700 transition-colors duration-500"
            to="#"
          >
            Contact Us
          </Link>
        </div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="py-2 px-3 bg-black text-white rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-500 ml-5"
        >
          <i className="fa-solid fa-bars"></i>
        </motion.div>
      </div>
    </nav>
  );
};

export default Header;
