import React, {useEffect} from 'react';
import axios from 'axios';

export default () => {
    useEffect(() => {
        // let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        // axios.get('https://nztodo.herokuapp.com/api/task/?format=json');
    }, [])

    return (
        <h1>stam</h1>
    )
}