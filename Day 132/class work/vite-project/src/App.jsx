import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'

export default function App() {
useEffect(() => {
gsap.fromTo(
  "#GB", 
  {
    x:0
  },
{
  x:900
}
)
}, [])


  return (
    <div className='bg-black' >
      <span>IXVISTOLMA</span>
      <div id='GB' className='w-56 h-56 bg-pink-500' ></div>
    </div>
  )
}

