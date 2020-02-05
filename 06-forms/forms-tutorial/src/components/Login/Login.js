/**
 * component that displays a login form
 */

import React, {useRef} from "react";

export default () => {
    // {current: DOMElement}
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    /**
     * deal with the login logic
     */
    const handleLogin = (event) => {
        console.log("print the email and password that the user entered");
        event.preventDefault();
        console.log(`email: ${emailRef.current.value} password: ${passwordRef.current.value}`)
        // event.stopPropagation()
    }

    return (
        <form onSubmit={handleLogin} noValidate>
            <div className="form-group">
                <label>Email</label>
                <input ref={emailRef}  type="email" name="email" className="form-control" />
            </div>    
            <div className="form-group">
                <label>Password</label>
                <input ref={passwordRef} required type="password" name="password" className="form-control" />
            </div>    
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
    );
}