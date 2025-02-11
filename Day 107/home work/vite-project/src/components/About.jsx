import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg max-w-xl">
          Hello! I’m a passionate web developer with a love for creating dynamic and responsive websites.
        </p>
      </div>
    </section>
  );
};

export default About;