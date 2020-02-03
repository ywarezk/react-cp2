import React, {useState} from "react";
import PropTypes from "prop-types";

// {message: "..."}
export default function Hello({message}) {
    // isVisible
    // @returns {[state, setState]}
    const [isVisible, setIsVisible] = useState(true);

    // user
    const [user, setUser] = useState({
        firstName: 'Yariv',
        lastName: 'Katz'
    })

    const toggleText = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            {isVisible && <h1>Hello world from function component {message}</h1>}            
            <button onClick={toggleText}>Toggle text</button>
        </div>
    );
}

// export default Hello;
Hello.propTypes = {
    message: PropTypes.string.isRequired
}

Hello.defaultProps = {
    message: "default message"
}