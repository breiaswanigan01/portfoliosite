import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <Link to="/" className=" ">
          Home
        </Link>
        <Link to="/about" className="">
          About
        </Link>
        <Link to="/projects" className="">
          Projects
        </Link>
        <Link to="/contact" className="">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
