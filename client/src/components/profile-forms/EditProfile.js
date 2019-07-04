import React, {Fragment, useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile, getCurrentProfile} from '../../actions/profile';

const EditProfile = ({profile: {profile, loading}, createProfile, getCurrentProfile, history}) => {
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
    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company: loading || !profile.company ? '' : profile.company,
            website: loading || !profile.website ? '' : profile.website,
            location: loading || !profile.location ? '' : profile.location,
            status: loading || !profile.status ? '' : profile.status,
            skills: loading || !profile.skills ? '' : profile.skills.join(','),
            githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            instagram: loading || !profile.social ? '' : profile.social.instagram
          });
    }, [loading, getCurrentProfile]);
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
        createProfile(formData, history, true);
    };
    return (
        <Fragment>
            <h1 className="center indigo-text text-accent-3">Create Profile</h1>
            <p className="lead">Create your profile here</p>
            <p><small className="red-text lead">*</small> = marked with this are required</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="text" name="company" placeholder="Company" value={company} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="website" placeholder="Website" value={website} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="location" placeholder="Location" value={location} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="status" placeholder="Status" value={status} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="skills" placeholder="Skills" value={skills} onChange={e => onChange(e)}/>
                    <p>Make skills a comma separated list such as (HTML, CSS, JavaScript, PHP)</p>
                </div>
                <div className="input-field">
                    <input type="text" name="githubusername" placeholder="Github Username" value={githubusername} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="bio" placeholder="Bio" value={bio} onChange={e => onChange(e)}/>
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
            <Link to="/dashboard" className="btn deep-orange accent-3 waves-effect waves-light my-3">Go Back</Link>
        </Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, {createProfile, getCurrentProfile})(withRouter(EditProfile));