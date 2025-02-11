import React, { useEffect } from 'react'

import gow from "../assets/videos/God of War Ragnarök - _Father and Son_ Cinematic Trailer _ PS5 & PS4 Games.mp4"
import gta from "../assets/videos/Grand Theft Auto VI Trailer 1.mp4"
import rdr2 from "../assets/videos/Red Dead Redemption 2 Trailer.mp4"
import sekiro from "../assets/videos/Sekiro_ Shadows Die Twice _ Story Preview Trailer _ PS4.mp4"

import {useVideo} from 'react-use';

export default function Hero() {
    useEffect(() => {
        setInterval(() =>{
            setvideoElement
        })
        const [videoElement, setVideoElement] = useState(gta)

        setInterval(() => {
            
        }, 500);
    })
    const [video, state, controls, ref] = useVideo(
        <video src={gow} autoPlay loop muted className='z-[-2] absolute top-0 left-0 w-full h-full object-cover' />)
    return (
    <div className='h-screen'>
     <div className=''>
      {video}
      <h1 className='text-[100px] text-blue-500 font-bold max-w-[900px] '>GAME SERIES OF PLAYSTATION</h1>
      </div>
    </div>
  )
}
