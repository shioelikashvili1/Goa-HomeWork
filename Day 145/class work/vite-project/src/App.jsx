import { useState } from 'react';

export default function SaveButton() {
  const [userName, setUserName] = useState('');

  const handleClick = () => {
    
    localStorage.setItem('userName', userName);
    alert(`მომხმარებელი ${userName} შეინახა localStorage-ში!`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-700 p-6 rounded-lg">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="მომხმარებლის სახელი"
          className="mb-4 p-2 w-64 text-black rounded"
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          შეინახე localStorage-ში
        </button>
      </div>
    </div>
  );
}
