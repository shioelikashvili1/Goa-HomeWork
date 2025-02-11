import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000')
            .then((res) => res.text())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">{data}</h1>
        </div>
    );
}

export default App;