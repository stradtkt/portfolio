import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from './../../actions/auth';


const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {
    const authLinks = (
        <ul className="right">
            <li><a onClick={logout} href="#!"><i className="fas fa-sign-out-alt"></i>{' '} <span className="hide-sm">Logout</span></a></li>
        </ul>
    );
    const guestLinks = (
        <ul className="right">
            <li><Link to="#!">Developers</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
    return (
        <nav>
            <div className="nav-wrapper indigo accent-3">
                <div className="container">
                    <Link to="/" className="brand-logo left">Portfolio</Link>
                    {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Navbar);
