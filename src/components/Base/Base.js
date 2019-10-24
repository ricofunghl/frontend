import React, {Component, Fragment} from 'react';
import AppBar from '../AppBar/AppBar';

class Base extends Component {
    render () {
        return (
            <Fragment>
                <AppBar />
                body
                some footer
            </Fragment>
            
        )
    }
}

export default Base;