/**
 * class component
 * countdown
 * destroys when reach zero
 * <Countdown initialCountdown={3} />
 */

import React from "react";

export default class Countdown extends React.Component {
    // state = {
    //     counter: 5
    // }

    constructor(props) {
        // this.props
        super(props);

        // antipattern - We need to deal with later
        this.state = {
            counter: props.initialCountdown
        }
    }

    // setInterval

    componentDidMount() {
        this.intervalId = setInterval(() => {

            this.setState((currentState) => {
                return {
                    counter: currentState.counter - 1
                }
            });

        }, 1000);
    }

    componentDidUpdate(prevProps) {
        if (this.state.counter === 0) {
            this.props.destroyCb(false);
        }

        if (prevProps.initialCountdown !== this.props.initialCountdown) {
            this.setState({
                counter : this.props.initialCountdown
            })
        }

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <h1>{this.state.counter}</h1>
        )
    }
}