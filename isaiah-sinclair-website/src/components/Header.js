import React from "react";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className='text-center pb-1 mb-2 heading'>
            <h1><strong><Link className="header-link p-2 nav-button rounded" to="/">Isaiah Sinclair</Link></strong></h1>
            <Navbar />
        </header>
    );
}

export default Header;