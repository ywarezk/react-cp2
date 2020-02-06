import {useEffect, useState} from "react";

export default function useWebsocket() {
    const [socketData, setSocketData] = useState(null);

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
            setSocketData(event.data)
        });

        return () => {
            socket.close();
        }
    }, [])

    return socketData;
}