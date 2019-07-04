import React from 'react';
import {Link} from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn indigo accent-3 waves-effect waves-light"><i className="fas fa-user-circle green-text text-accent-3"></i> Edit Profile</Link>
            <Link to="/add-experience" className="btn indigo accent-3 waves-effect waves-light"><i className="fab fa-black-tie green-text text-accent-3"></i> Add Experience</Link>
            <Link to="/add-education" className="btn indigo accent-3 waves-effect waves-light"><i className="fas fa-graduation-cap green-text text-accent-3"></i> Add Education</Link>
        </div>
    )
}

export default DashboardActions;
