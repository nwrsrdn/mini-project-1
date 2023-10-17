import React, { useState, useEffect } from 'react';
import socketIoClient from 'socket.io-client';
import DataTable from './DataTable';

const ENDPOINT = 'wss://localhost:3030';

function App() {
    const [datasets, setDatasets] = useState([]);

    useEffect(() => {
        const socket = socketIoClient(ENDPOINT);
    
        socket.on('log', console.log)
        socket.on('newData', (data) => {
            setDatasets(data);
        });
    
        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <DataTable data={datasets} />
        </div>
    );
}

export default App;
