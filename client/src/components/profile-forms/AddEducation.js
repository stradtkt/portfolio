import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile';

const AddEducation = ({addEducation, history}) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });
    const [toDateDisabled, toggleDisabled] = useState(false);
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description
    } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    };
    return (
        <Fragment>
            <h1 className="center indigo-text text-accent-3">Add Education</h1>
            <p className="lead"><i className="fas fa-code-branch"></i> Add education that involves web development</p>
            <p><small className="red-text lead">*</small> = with this are required</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                    <input type="text" name="school" placeholder="* School" value={school} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="degree" placeholder="* Degree" value={degree} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="fieldofstudy" placeholder="Field of Study" value={fieldofstudy} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="from" placeholder="* From" value={from} onChange={e => onChange(e)}/>
                </div>
                <div className="input-field">
                    <input type="text" name="to" placeholder="To" value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''}/>
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
                <input type="submit" value="Add Education" className="btn indigo accent-3 waves-light waves-effect"/>
            </form>
            <Link to="/dashboard" className="btn deep-orange accent-3 waves-effect waves-light my-3">Go Back</Link>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
}

export default connect(null, {addEducation})(withRouter(AddEducation));
