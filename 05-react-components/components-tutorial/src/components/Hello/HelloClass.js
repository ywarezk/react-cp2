
import React from "react";

class Hello extends React.Component {
    state = {
        isVisible: true,
        user: {

        }
    }

    toggleText = () => {
        
        // this.setState({
        //     isVisible: !this.state.isVisible
        // })

        // if the state change taloy in the previous state
        this.setState((currentState) => {
            return {
                isVisible: !currentState.isVisible 
            }
        })
    }
    
    /**
     * how my component look like
     */
    render() {        
        return (
            <>
                {this.state.isVisible && <h1>Hello world from class component {this.props.msg}</h1>}            
                <button onClick={this.toggleText}>Toggle text</button>
            </>
        );
    }    
}

export default Hello;