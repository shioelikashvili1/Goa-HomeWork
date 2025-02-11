import React, { useEffect } from 'react';
import gsap from 'gsap';

const App = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      '#div1',
      { x: 400, y: -300, opacity: 0, scale: 0.5, rotationY: 180 },
      { x: 0, y: 50, opacity: 1, scale: 1.2, rotationY: 0, duration: 1.5 }
    )
      .to('#div1', {
        scale: 1,
        y: 0,
        background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        color: '#fff',
        duration: 1,
        boxShadow: '0 0 30px #f59e0b',
      })
      .to('#div1', {
        rotation: 360,
        scale: 1.1,
        duration: 1.2,
        ease: 'elastic.out(1.2, 0.4)',
      })
      .to('#div1', {
        scale: 1,
        rotateY: 720,
        rotateX: 360,
        duration: 2,
        background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
        boxShadow: '0 0 50px #9333ea, 0 0 80px #3b82f6',
      })
      .to('#div1', {
        scale: 1.3,
        y: -30,
        textShadow: '0px 0px 15px #ffffff',
        duration: 0.7,
      })
      .to('#div1', {
        scale: 1,
        y: 0,
        boxShadow: '0 0 10px #ffffff',
        duration: 0.5,
        ease: 'bounce.out',
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div
        id="div1"
        className="w-60 h-60 bg-black text-amber-300 flex items-center justify-center text-center rounded-xl shadow-2xl text-xl font-extrabold"
      >
        DAZLEVDE AMAZING ANIMATION
      </div>
    </div>
  );
};

export default App;
