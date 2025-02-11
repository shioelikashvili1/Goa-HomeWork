import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import goatImg from "./assets/goat.png"; // სურათის იმპორტი

export default function App() {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const tl = gsap.timeline({ repeat: 0 });

  useEffect(() => {
    // Scene 1: ყუთი მოძრაობს შუაში და ფერი იცვლება
    tl.to(boxRef.current, {
      duration: 1,
      x: "50vw",
      xPercent: -50,
      backgroundColor: "#1e90ff", // Dodger Blue
      ease: "power5.inOut"
    });
    // Scene 2: ყუთი შედგება შუაში და ფერი იცვლება
    tl.to(boxRef.current, {
      duration: 1,
      y: "50vh",
      yPercent: -50,
      rotate: 360,
      backgroundColor: "#32cd32", // Lime Green
    });
    // Scene 3: ყუთი გრძელდება და ფერი გადაეცემა
    tl.to(boxRef.current, {
      duration: 0.2,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#ff4500", // Orange Red
    });
    // Scene 4: ტექსტი მკვეთრად გამოჩნდება
    tl.to(textRef.current, {
      delay: 1,
      opacity: 1,
      duration: 0.5,
    });

    // Scene 5: თხის სურათი მარცხენა ზედა კუთხიდან ჩამოვიდეს და 180 გრადუსით მოტრიალდეს
    tl.to(imgRef.current, 
      {
        opacity: 1,
        rotate: -10, // ნახევრად - 180 გრადუსი
        duration: 10,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <>
      <div ref={boxRef} className='bg-black size-50'></div>
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
        <h1 ref={textRef} className='opacity-0 text-6xl font-extrabold text-black text-center mb-4'>
          GROUP 6
        </h1>
        <img 
          ref={imgRef} 
          src={goatImg} 
          alt="Goat" 
          className="absolute top-80 left-190 w-32 h-32 opacity-0" 
        />
      </div>
    </>
  );
}
