import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Counter App
        </h1>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8 text-gray-900">
          {count}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 sm:px-6 rounded transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 sm:px-6 rounded transition duration-300"
          >
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 sm:px-6 rounded transition duration-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
