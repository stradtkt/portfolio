import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import {Link} from 'react-router-dom';

const Dashboard = ({getCurrentProfile, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? <Spinner/> : 
        <Fragment>
            <h1 className="center indigo-text text-accent-3">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Welcome {user && user.name}
            </p>
            {profile !== null ? 
                (<Fragment>
                    <DashboardActions/>
                </Fragment>) : 
                (<Fragment>
                    <p>You have not yet set up a profile.  Please add some info.</p>
                    <Link to="/create-profile" className="btn indigo accent-3 waves-effect waves-light my-1">Create Profile</Link>
                </Fragment>)}
        </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
