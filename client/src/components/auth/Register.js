import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({setAlert}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const {name, email, password, password2} = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            console.log(formData);
        }
    };
    return (
        <Fragment>
            <h1 className="center m-3 indigo-text text-accent-3">Sign Up</h1>
            <p className="lead m-1"><i className="fas fa-user indigo-text text-accent-3"></i>{'  '} Create Your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="text" name="name" value={name} onChange={e => onChange(e)}/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" value={email} onChange={e => onChange(e)}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password" value={password} onChange={e => onChange(e)}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                    <input type="password" name="password2" value={password2} onChange={e => onChange(e)}/>
                    <label htmlFor="password2">Confirm Password</label>
                </div>
                <input type="submit" value="Register" className="btn indigo accent-3 white-text waves-effect waves-light"/>
            </form>
            <p className="my-1">Already have an account? {'  '} <Link to="/login" className="btn deep-orange darken-3 waves-effect waves-light">Login</Link></p>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, {setAlert})(Register);
