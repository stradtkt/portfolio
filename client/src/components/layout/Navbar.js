import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo accent-3">
                <div className="container">
                    <a href="#!" class="brand-logo">Portfolio</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
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
