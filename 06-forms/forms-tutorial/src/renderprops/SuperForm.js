import React from "react";

export default class SuperForm extends React.Component {
    // state = initalFormValues

    constructor(props) {
        super(props);

        // anti pattern
        this.state = props.initialValues;
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        // return this.props.children()
        return this.props.render(this.state, this.handleChange)
    }
}