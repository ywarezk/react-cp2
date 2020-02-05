import React, {createRef} from "react";

export default class Login extends React.Component {
    handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        console.log(`email: ${this.emailRef.current.value} password: ${this.passwordRef.current.value}`)
        event.preventDefault();
    }

    constructor(props) {
        super(props);
        this.emailRef = createRef();
        this.passwordRef = createRef();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input ref={this.emailRef} type="email" name="email" className="form-control" />
                </div>    
                <div className="form-group">
                    <label>Password</label>
                    <input ref={this.passwordRef} required type="password" name="password" className="form-control" />
                </div>    
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        )
    }
}