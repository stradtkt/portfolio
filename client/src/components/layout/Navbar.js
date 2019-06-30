import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo accent-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Portfolio</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="#!">Developers</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
