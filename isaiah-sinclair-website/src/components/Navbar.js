import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../nav-bar.css';
import ButtonMailto from './ButtonMailto';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  const options = [
    { label: 'S23 (NCR)', value: '/co-op/s23WorkTerm' },
    { label: 'W23 (NCR Voyix)', value: '/co-op/f23WorkTerm' },
    { label: 'S24 (EcoTank Canada)', value: '/co-op/s24WorkTerm' },
    { label: 'W25 (CPP Investments)', value: 'co-op/w25WorkTerm' },
    { label: 'S25 (SAP)', value: 'co-op/s25WorkTerm' },
  ];

  const [workTerm, setWorkTerm] = useState('');

  useEffect(() => {
    // Navigates to page and resets work term path
    if (workTerm) {
      navigate(workTerm);
      setWorkTerm('');
    }
  }, [workTerm, navigate]);

  return (
    <nav className="nav-container">
      <Link className="header-link p-2 nav-button rounded" to="/resume">
        Resume
      </Link>
      <Dropdown
        controlClassName="nav-bar-dropdown-control"
        onChange={(e) => setWorkTerm(e.value)}
        value={workTerm}
        placeholder="Work Term Reports"
        options={options}
      />
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
    </nav>
  );
};

export default Navbar;
