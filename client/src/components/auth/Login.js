import React, {Fragment, useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const {email, password} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };
    if(isAuthenticated) {
        return <Redirect to="/dashboard"/>
    }
    return (
        <Fragment>
            <h1 className="center m-3 indigo-text text-accent-3">Sign Up</h1>
            <p className="lead m-1"><i className="fas fa-user indigo-text text-accent-3"></i>{'  '} Create Your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" value={password} onChange={e => onChange(e)}/>
                    <label htmlFor="password">Password</label>
                </div>
                <input type="submit" value="Login" className="btn indigo accent-3 white-text waves-effect waves-light"/>
            </form>
            <p className="my-1">Need to sign up? {'  '} <Link to="/register" className="btn deep-orange darken-3 waves-effect waves-light">Register</Link></p>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);

