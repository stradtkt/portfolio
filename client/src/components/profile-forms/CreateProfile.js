import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../../actions/profile';

const CreateProfile = ({createProfile, history}) => {
    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({...formData,[e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    };
    return (
        <Fragment>
            <h1 className="center indigo-text text-accent-3">Create Profile</h1>
            <p className="lead">Create your profile here</p>
            <p><small className="red-text lead">*</small> = marked with this are required</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="text" name="company" value={company} onChange={e => onChange(e)}/>
                    <label htmlFor="company">Company</label>
                </div>
                <div className="input-field">
                    <input type="text" name="website" value={website} onChange={e => onChange(e)}/>
                    <label htmlFor="website">Website</label>
                </div>
                <div className="input-field">
                    <input type="text" name="location" value={location} onChange={e => onChange(e)}/>
                    <label htmlFor="location">Location</label>
                </div>
                <div className="input-field">
                    <input type="text" name="status" value={status} onChange={e => onChange(e)}/>
                    <label htmlFor="status">Status <small className="red-text lead">*</small></label>
                </div>
                <div className="input-field">
                    <input type="text" name="skills" value={skills} onChange={e => onChange(e)}/>
                    <label htmlFor="skills">Skills <small className="red-text lead">*</small></label>
                    <p>Make skills a comma separated list such as (HTML, CSS, JavaScript, PHP)</p>
                </div>
                <div className="input-field">
                    <input type="text" name="githubusername" value={githubusername} onChange={e => onChange(e)}/>
                    <label htmlFor="githubusername">Github Username</label>
                </div>
                <div className="input-field">
                    <input type="text" name="bio" value={bio} onChange={e => onChange(e)}/>
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="input-field social-input">
                    <i className="fab fa-twitter fa-2x"></i>
                    <input type="text" name="twitter" placeholder="Twitter URL" value={twitter} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field social-input">
                    <i className="fab fa-facebook fa-2x"></i>
                    <input type="text" name="facebook" placeholder="Facebook URL" value={facebook} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field social-input">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <input type="text" name="linkedin" placeholder="Linkedin URL" value={linkedin} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field social-input">
                    <i className="fab fa-youtube fa-2x"></i>
                    <input type="text" name="youtube" placeholder="Youtube URL" value={youtube} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field social-input">
                    <i className="fab fa-instagram fa-2x"></i>
                    <input type="text" name="instagram" placeholder="Instagram URL" value={instagram} onChange={e => onChange(e)}/>
                </div>
                <input type="submit" value="Create Profile" className="btn indigo accent-3 waves-effect waves-light"/>
            </form>
            <Link to="/dashboard" className="btn deep-orange accent-3 waves-effect waves-light">Go Back</Link>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired
}


export default connect(null, {createProfile})(withRouter(CreateProfile));
