/**
 * Home page
 */

import React from "react";
import {useHistory} from "react-router-dom";

export default function Home() {
    const history = useHistory()

    const navigateWithCode = () => {
        history.push("/about");
    }

    return (
        <>
            <h1>Hello im in the homepage</h1>
            <button onClick={navigateWithCode}>
                Navigate with code
            </button>
        </>
    )
}