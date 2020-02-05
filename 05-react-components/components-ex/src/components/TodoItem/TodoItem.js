/**
 * component that displays the title and description 
 * of each task we get from the server
 */

import React from "react";

// props = {task : {id, titlem description}}
export default ({task}) => {
    return (
        <li className="list-group-item">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
        </li>
    )
}

