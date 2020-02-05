/**
 * component that displays a login form
 * most of the time the forms you deal with you will want them controlled
 * login controlled in react state
 */

import React, {useState} from "react";

export default () => {
    
    const [formState, setFormState] = useState({
        email: 'yariv@nerdeez.com',
        password: '12345'
    });
    
    /**
     * deal with the login logic
     */
    const handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        event.preventDefault();
        console.log(`email: ${formState.email} password: ${formState.password}`);
        // event.stopPropagation()
    }

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
                <label>Email</label>
                <input 
                    onChange={handleChange}
                    value={formState.email} type="email" name="email" className="form-control" />
            </div>    
            <div className="form-group">
                <label>Password</label>
                <input 
                    onChange={handleChange}
                    value={formState.password} required type="password" name="password" className="form-control" />
            </div>    
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    );
}