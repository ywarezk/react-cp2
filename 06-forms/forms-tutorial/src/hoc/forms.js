/**
 * hoc example
 */

import React from "react";

export default function formsHOC(initalFormValues) {

    return function(SomeForm) {

        return class Forms extends React.Component {
            state = initalFormValues
    
            handleChange = (event) => {
                this.setState({
                    [event.target.name]: event.target.value
                });
            }
    
            render() {
                const {parentAttributeToTakeHere, ...props} = this.props;
                return (                
                    <SomeForm {...props} changeFieldsCb={this.handleChange} values={this.state} />
                )
            }
        }

    }

    

    // return () => {
    //     return (
    //         <SomeForm />
    //     )
    // }
}