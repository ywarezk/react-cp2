/**
 * Home page
 */

import React from "react";
import {useParams, useLocation} from "react-router-dom";

export default function About() {
    const params = useParams();
    const location = useLocation()

    return (
        <h1>Hello im in the about page {params.title} {location.search}</h1>
    )
}