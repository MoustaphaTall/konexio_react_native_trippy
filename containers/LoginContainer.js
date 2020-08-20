import React, { Component } from 'react';
import Login from '../components/auth/Login';
import Auth from '../Auth';

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isValidEmail: false,
            isValidPassword: false
        }

        this.validateInput = this.validateInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {        
        const { email, password } = this.state;        
        Auth.login({
            email,
            password
        })
            .then((res) => {
                console.log('res', res);
                if (res.error) {
                    alert(res.error);
                } else {
                    Auth.setUser(res);
                    this.props.history.push("/home");
                }
            });
    }

    validateInput(type, input) {
        const validEmail = new RegExp(/(?=.*[a-z])(?=.*@)(?=.*[.])[a-z\d,.@-]{1,}/g);
        const validPassword = new RegExp(/[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{7,}/g);        

        switch (type) {
            case 'email':
                const isValidEmail = validEmail.test(input);
                this.setState({
                    email: input,
                    isValidEmail
                });
                break;
            case 'password':
                const isValidPassword = validPassword.test(input);
                this.setState({
                    password: input,
                    isValidPassword
                });
                break;
            default:
                console.log("can't validate input, wrong type parameter")
        }
    }

    render() {     
        const { email, password } = this.state;             
        return (
            <Login {...this.state} onChangeText={this.validateInput} onSubmit={this.onSubmit} />
        );
    }
}

export default LoginContainer;