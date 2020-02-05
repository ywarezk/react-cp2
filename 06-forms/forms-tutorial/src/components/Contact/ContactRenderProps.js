/**
 * component class
 * form
 * name, message
 */

import React from "react";
import SuperForm from "../../renderprops/SuperForm.js";

class Contact extends React.Component {
    handleContact = (event) => {
        console.log("print the email and password that the user entered");
        console.log(`name: ${this.state.name} message: ${this.state.message}`)
        event.preventDefault();
    }

    render() {
        // return (
        //     <SuperForm children={() => {...}}>
        //         {
        //             () => {...}
        //         } 
        //           
        //     </SuperForm>
        // )

        return (
            <SuperForm 
                initialValues={ {name: 'yariv', message: ''} }
                render={ (values, handleChange) => {
                    return (
                        <form onSubmit={this.handleContact} noValidate>
                            <h1>{this.props.title}</h1>
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    onChange={handleChange}
                                    value={values.name}                                    
                                    type="text" name="name" className="form-control" />
                            </div>    
                            <div className="form-group">
                                <label>Message</label>
                                <textarea 
                                    onChange={handleChange}
                                    value={values.message}                                                                        
                                    name="message" className="form-control">
                                </textarea>                
                            </div>    
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Send Message</button>
                            </div>
                        </form>
                    )
                } }
            />
        )
    }
}
