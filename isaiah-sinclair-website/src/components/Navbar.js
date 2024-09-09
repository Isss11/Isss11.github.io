import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from 'react-dropdown';
import "react-dropdown/style.css";
import ButtonMailto from "./ButtonMailto";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link className="header-link p-2 nav-button rounded" to="/resume">
          Resume
        </Link>
        <Link
          className="header-link p-2 nav-button rounded"
          to="/co-op/s23WorkTerm"
        >
          S23 Work Term
        </Link>
        <Link
          className="header-link p-2 nav-button rounded"
          to="/co-op/f23WorkTerm"
        >
          F23 Work Term
        </Link>
        <Link
          className="header-link p-2 nav-button rounded"
          to="https://www.linkedin.com/in/isaiahsinclair/"
        >
          <img
            className="nav-bar-logo mx-0.5 my-0"
            src={linkedinLogo}
            alt="LinkedIn"
          />
        </Link>
        <Link
          className="header-link p-2 nav-button rounded"
          to="https://github.com/Isss11"
        >
          <img
            className="nav-bar-logo mx-0.5 my-0"
            src={githubLogo}
            alt="GitHub"
          />
        </Link>
        <ButtonMailto
          label="isincl01@uoguelph.ca"
          mailto="mailto:isincl01@uoguelph.ca"
        />
      </ul>
    </nav>
  );
};

export default Navbar;
