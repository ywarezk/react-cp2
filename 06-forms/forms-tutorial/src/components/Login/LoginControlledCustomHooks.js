/**
 * component that displays a login form
 * most of the time the forms you deal with you will want them controlled
 * login controlled in react state
 */

import React, {useState} from "react";
import useForms from "../../custom-hooks/use-forms";

export default () => {
    
    const [values, handleChange] = useForms({
        email: 'yariv@nerdeez.com',
        password: '12345'
    });
    
    /**
     * deal with the login logic
     */
    const handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        event.preventDefault();
        console.log(`email: ${values.email} password: ${values.password}`);
        // event.stopPropagation()
    }

    

    return (
        <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
                <label>Email</label>
                <input 
                    onChange={handleChange}
                    value={values.email} type="email" name="email" className="form-control" />
            </div>    
            <div className="form-group">
                <label>Password</label>
                <input 
                    onChange={handleChange}
                    value={values.password} required type="password" name="password" className="form-control" />
            </div>    
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    );
}