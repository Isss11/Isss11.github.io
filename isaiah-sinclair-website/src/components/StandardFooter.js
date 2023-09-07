import React from "react";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";

const StandardFooter = () => {
    return (
        <footer className="text-center my-1">
            <div>Created by Isaiah Sinclair - 2023</div>
            <a href="https://github.com/Isss11"><img className="footer-logo m-1" src={githubLogo} alt="GitHub"></img></a>
            <a href="https://www.linkedin.com/in/isaiahsinclair/"><img className="footer-logo m-1" src={linkedinLogo} alt="Linkedin"></img></a>
        </footer>
    );
}

export default StandardFooter;