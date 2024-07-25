import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-end space-x-8 p-2 ">
        <p>
        <Link to="/" className=" ">
          Home
        </Link>
        </p>
        <p>
        <Link to="/about" className="">
          About
        </Link>
        </p>
        <p>
        <Link to="/projects" className="">
          Projects
        </Link>
        </p>
        <p>
        <Link to="/contact" className="">
          Contact
        </Link>
        </p>
      </div>
    </>
  );
};

export default Navbar;
