import React from "react";
import { Link } from "react-router-dom";
import emailLogo from "../assets/emailLogo.png";
// Copied this component from: https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            <img className="nav-bar-logo mx-0.5 my-0" src={emailLogo} alt="Email Isaiah"></img>
        </Link>
    );
};

export default ButtonMailto;