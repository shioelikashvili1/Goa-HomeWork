import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">მთავარი</Link></li>
        <li><Link to="/about">ზღვის ცხენების შესახებ</Link></li>
        <li><Link to="/seahorses">ზღვის ცხენები</Link></li>
        <li><Link to="/seahorses/new">ახალი ზღვის ცხენის დამატება</Link></li>
        <li><Link to="/contact">კონტაქტი</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
