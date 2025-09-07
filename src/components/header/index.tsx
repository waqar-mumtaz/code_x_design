import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex gap-4 mb-6 text-blue-600 underline">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;
