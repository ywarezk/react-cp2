/**
 * our countdown component as a function
 */

import React, {useState, useEffect} from "react";



// let teardown = tearDownFunction
export default function Countdown({initialCountdown, destroyCb}) {

    // Anti pattern
    const [counter, setCounter] = useState(initialCountdown);

    const [counterDelayed, setCounterDelayed] = useState(100);

    // componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect(() => {
        console.log('A');    
        const intervalId = setInterval(() => {
            console.log('interval A');
            setCounter(counter - 1);
        }, 1000);

        return function tearDownFunction() {
            console.log('tear A');
            clearInterval(intervalId);        
        }
    }, [counter]);


    /**
     * componentDidUpdate() {
     *     if (prevState.counterDelayed !== this.state.counterDelayed) {...}
     * }
     */
    useEffect(() => {
        console.log('B');
        const intervalId = setInterval(() => {
            console.log('interval B - never');
            setCounterDelayed(counterDelayed - 1)
        }, 2000);

        return function() {
            console.log('tear B');
            clearInterval(intervalId);
        }
    }, [counterDelayed])

    // const stamFunction = () => {}

    /**
     * destroy the component
     */
    useEffect(() => {
        if (counter === 0) {
            destroyCb();
        }
    }, [counter, destroyCb])

    return (
        <div>
            <h1>{counter}</h1>
            <p>
                {counterDelayed}
            </p>
        </div>
        
    )
}