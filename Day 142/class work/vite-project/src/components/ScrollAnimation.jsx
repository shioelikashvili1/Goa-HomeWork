import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo from "../assets/grdzelo.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
   
    ScrollTrigger.defaults({ markers: true });

  
    gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%", 
            end: "top 60%",    
            scrub: true,       
          },
        }
      );
      
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "0",  
            end: "bottom",    
            toggleActions: "play none none reverse"      
          },
        }
      );
      
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-whit">
      <h1 ref={textRef} className="text-4xl font-bold mb-4">ScrollTrigger ანიმაცია</h1>
      <img ref={imageRef} src={photo} alt="Example" className="rounded-lg shadow-lg w-1/2 mt-50 " />
      <div className="h-[200vh]"></div> 
    </div>
  );
};

export default ScrollAnimation;
