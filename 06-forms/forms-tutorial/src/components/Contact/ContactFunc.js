/**
 * component class
 * form
 * name, message
 */

import React from "react";

export default () => {
    const handleContact = () => {
        console.log("print the email and password that the user entered");
        console.log(`name: ${} message: ${}`)
        event.preventDefault();    
    }

    return (
        <form onSubmit={handleContact} noValidate>        
            <div className="form-group">
                <label>Name</label>
                <input                     
                    type="text" name="name" className="form-control" />
            </div>    
            <div className="form-group">
                <label>Message</label>
                <textarea                 
                    name="message" className="form-control">
                </textarea>                
            </div>    
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Send Message</button>
            </div>
        </form>
    );
}

