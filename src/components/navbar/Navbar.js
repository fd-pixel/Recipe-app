import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="navleft">
          <Link to="/">RECIPE</Link>
        </div>
        <ul>
          <li>
            <Link to="/about">ABOUT ME</Link>
          </li>
          <li>
            <Link
              to={{ pathname: "https://github.com/fd-pixel" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </Link>
          </li>
          <li>
            <Link to="/login">LOGOUT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
