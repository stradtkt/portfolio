import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({profile:{user:{_id, name, avatar}, status, company, location, skills}}) => {
    return (
        <div>
            <div className="bg-light">
                <img src={avatar} alt="Avatar" className="round-img"/>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{status} {company && <span> at company</span>}</p>
                <Link to={`/profile/${_id}`} className="btn indigo accent-3 waves-effect waves-light">View Profile</Link>
            </div>
            <ul>
                {skills.slice(0,4).map((skill,index) => (
                    <li key={index} className="indigo-text text-accent-3">
                        <i className="fas fa-check"></i> {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem;
