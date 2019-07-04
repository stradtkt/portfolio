import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addExperience} from '../../actions/profile';

const AddExperience = ({addExperience, history}) => {
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });
    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    };
    return (
        <Fragment>
            <h1 className="center indigo-text text-accent-3">Add Experience</h1>
            <p className="lead"><i className="fas fa-code-branch"></i> Add any developer/programming positions that you have had in the past</p>
            <p><small className="red-text lead">*</small> = with this are required</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="text" name="title" placeholder="* Job Title" value={title} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="company" placeholder="* Company" value={company} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="location" placeholder="Location" value={location} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="date" name="from" placeholder="* From" value={from} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="date" name="to" placeholder="To" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''}/>
                </div>
                <div className="switch">
                    <label>
                        Not Current
                        <input type="checkbox" name="current" value={current} checked={current} onChange={e => {
                            setFormData({...formData, current: !current});
                            toggleDisabled(!toDateDisabled);
                        }}/>
                        <span className="lever"></span>
                        Current
                    </label>
                </div>
                <div className="input-field">
                    <input type="text" name="description" placeholder="Description" value={description} onChange={e => onChange(e)}/>
                </div>
                <input type="submit" value="Add Experience" className="btn indigo accent-3 waves-light waves-effect"/>
            </form>
            <Link to="/dashboard" className="btn deep-orange accent-3 waves-effect waves-light my-3">Go Back</Link>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
}

export default connect(null, {addExperience})(withRouter(AddExperience));
