import { Outlet } from 'react-router-dom';

function Seahorses() {
  return (
    <div>
      <h1 className="text-2xl font-bold">ზღვის ცხენების სია</h1>
      <p>აირჩიეთ ზღვის ცხენი მეტი დეტალისთვის.</p>
      <Outlet /> {/* Nested Route-ების გამოძახება */}
    </div>
  );
}

export default Seahorses;
