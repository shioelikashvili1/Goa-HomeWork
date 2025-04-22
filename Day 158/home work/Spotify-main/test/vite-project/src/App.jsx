import {useEffect, useState} from 'react'
import './App.css'
import axios from "axios"

function App() {
    const [count, setCount] = useState(0)
    const [getMusic, setGetMusic] = useState(null)
    useEffect(() => {
        const getMusicData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/music/music1  `, {
                    responseType: 'blob',
                });

                console.log(response.data);
                const audioUrl = URL.createObjectURL(response.data);
                setGetMusic(audioUrl);
            } catch (err) {
                console.error("Failed to fetch audio:", err);
            }
        };

        getMusicData();
    }, []);

    console.log(getMusic?.data)
    return (
        <>
            <h1>Audio Player</h1>
            {getMusic ? (
                <audio controls src={getMusic}></audio>
            ): <>...loading</>}
        </>

    )
}

export default App
