import React , {Component} from 'react';
import Card from '../../components/UI/Card/Card';
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

        updatedLoginForm[evt.target.name] = evt.target.value;
        this.setState(
            {
                loginForm : updatedLoginForm
            }
        )
    }

    render () {
        return (
            <Card title="Please Log In">
                <TextField name='username' label='Username' onChange={this.onChangeHandler} value={this.state.loginForm.username} />
                <TextField name='password' label='Password' onChange={this.onChangeHandler}  value={this.state.loginForm.password} />
            </Card>
        );
    }
}

export default Login;