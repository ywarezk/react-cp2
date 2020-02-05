import React, {createRef} from "react";
import formsHOC from "../../hoc/forms";

class Login extends React.Component {
    handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        console.log(`email: ${this.state.email} password: ${this.state.password}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleLogin} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        onChange={this.props.changeFieldsCb}
                        value={this.props.values.email} 
                        type="email" name="email" className="form-control" />
                </div>    
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={this.props.values.password}
                        onChange={this.props.changeFieldsCb}
                        required type="password" name="password" className="form-control" />
                </div>    
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        )
    }
}

formsHOC(
    {
        email: 'yariv@nerdeez.com',
        password: '12345'
    }
)(Login)