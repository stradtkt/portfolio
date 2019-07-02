import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import {Provider} from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import {loadUser} from './actions/auth';
import './App.css';

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar/>
                    <Route exact path="/" component={Landing}/>
                    <div className="container">
                        <Alert/>
                        <Switch>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
