import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Counter: {count}</h1>
        <button 
          className="bg-blue-500 text-white p-2 rounded mr-2" 
          onClick={increment}
        >
          Increase
        </button>
        <button 
          className="bg-red-500 text-white p-2 rounded"
          onClick={decrement}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default Counter;
