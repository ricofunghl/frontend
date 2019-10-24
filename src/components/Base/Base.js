import React, {Component, Fragment} from 'react';
import AppBar from '../AppBar/AppBar';
import Login from '../../containers/Login/Login';
import {Switch} from 'react-router-dom';
import classes from './Base.module.css';

class Base extends Component {
    render () {
        return (
            <Fragment>
                <AppBar />
                <div className={classes.Body}>
                    <Switch>
                        <Login />
                    </Switch>
                </div>
                some footer
            </Fragment>
            
        )
    }
}

export default Base;