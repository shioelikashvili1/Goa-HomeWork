import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-700 text-lg max-w-xl">
          Feel free to reach out via email: <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
