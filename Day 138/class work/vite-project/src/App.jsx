import React, { useEffect } from 'react'
import gsap from "gsap"
export default function App() {
  
  useEffect(() => {
    gsap.fromTo(".intro-animation",
      {
        opacity: 1,
        duration: 2,//!➡➡➡➡➡➡➡➡➡➡➡➡➡⬇
        ease: "power2.in" //? ----------------⬇
      },//? ----------------------------------⬇
      {//? -----------------------------------⬇
        delay: 1,//! ➡➡➡➡➡➡➡➡➡➡➡➡➡ ⬇
        display: "none",//? ------------------⬇
        opacity: 0,//? -----------------------⬇
      }//? -----------------------------------⬇
    )//? -------------------------------------⬇
    gsap.fromTo(".hero-animation",//? --------⬇
      {//? -----------------------------------⬇
        opacity: 0,//? -----------------------⬇
      },//? ----------------------------------⬇
      {//? -----------------------------------⬇
        delay: 2,//! ⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅⬅
        opacity: 1,
      }
    )
  }, [])

  const SplitText = ({ children }) => {
    const words = children.split("");
  
    return (
      <>
        {words.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </>
    );
  };
  
  return (
    <div className='bg-slate-100 h-screen'>
      {/* //! SCENE  1*/}
      <div className='hidden  intro-animation  justify-center items-center top-0 left-0 absolute bg-slate-100 h-screen w-screen'>
        <h1 className='font-bold text-4xl'>GAME DEVELOPMENT</h1>
      </div>
      <div className='hero-animation mx-auto container text-center'> {/* Rimossa freccia ------> */}
        <SplitText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugiat illo corrupti! Nemo tenetur aliquid impedit voluptates ipsum libero distinctio assumenda rem laboriosam provident, aliquam voluptate, corrupti autem animi officiis.
        </SplitText>
      </div>
    </div>
  );
}