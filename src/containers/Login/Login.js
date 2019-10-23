import React , {Component} from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import TextField from '../../components/UI/TextField/TextField';

class Login extends Component {
    state = {
        loginForm : {
            username : '',
            password : ''
        },

        isLoggedIn : false
    }

    onChangeHandler = (evt) => {
        evt.preventDefault();
        
        const updatedLoginForm = {...this.state.loginForm}

        
    }

    render () {
        return (
            <Card>
                <CardHeader>
                    title = 'Please Log In'
                </CardHeader>
                <CardContent>
                    <TextField name='username' label='Username' onChange={this.onChangeHandler} value={this.state.loginForm.username} />
                    <TextField name='password' label='Password' onChange={this.onChangeHandler}  value={this.state.loginForm.password} />
                </CardContent>
            </Card>
        );
    }
}

export default Login;