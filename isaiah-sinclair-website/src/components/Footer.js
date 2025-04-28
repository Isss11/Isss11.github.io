import React from 'react';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

const Footer = () => {
  return (
    <footer className="text-center my-1">
      <div>Isaiah Sinclair (2025)</div>
      <a href="https://github.com/Isss11">
        <img className="footer-logo m-1" src={githubLogo} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/isaiahsinclair/">
        <img className="footer-logo m-1" src={linkedinLogo} alt="Linkedin" />
      </a>
    </footer>
  );
};

export default Footer;
