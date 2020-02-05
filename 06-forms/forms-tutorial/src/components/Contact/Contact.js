/**
 * component class
 * form
 * name, message
 */

import React from "react";
import formsHOC from "../../hoc/forms";

class Contact extends React.Component {
    handleContact = (event) => {
        console.log("print the email and password that the user entered");
        console.log(`name: ${this.state.name} message: ${this.state.message}`)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleContact} noValidate>
                <h1>{this.props.title}</h1>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        onChange={this.props.changeFieldsCb}
                        value={this.props.values.name}
                        type="text" name="name" className="form-control" />
                </div>    
                <div className="form-group">
                    <label>Message</label>
                    <textarea 
                        value={this.props.values.message}
                        onChange={this.props.changeFieldsCb}
                        name="message" className="form-control">
                    </textarea>                
                </div>    
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Send Message</button>
                </div>
            </form>
        )
    }
}

const SuperContact = formsHOC({
    name: 'Yariv Katz',
    message: ''
})(Contact)
export default SuperContact;