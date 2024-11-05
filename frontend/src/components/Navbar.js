import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/clinic">Clinic</Link></li>
                <li><Link to="/volunteer">Volunteer</Link></li>
                <li><Link to="/support">Support</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/research">Research</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
