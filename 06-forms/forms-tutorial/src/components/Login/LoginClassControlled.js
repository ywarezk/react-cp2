import React, {createRef} from "react";

export default class Login extends React.Component {
    state = {
        // this will hold the email.value
        email: 'yariv@nerdeez.com',

        // this will hold the password.value
        password: ''    
    }

    handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        console.log(`email: ${this.state.email} password: ${this.state.password}`)
        event.preventDefault();
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleChange = (event, name) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleChange2 = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        onChange={(event) => this.handleChange(event, "email")}
                        value={this.state.email} 
                        type="email" name="email" className="form-control" />
                </div>    
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={this.state.password}
                        onChange={this.handleChange2}
                        required type="password" name="password" className="form-control" />
                </div>    
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        )
    }
}