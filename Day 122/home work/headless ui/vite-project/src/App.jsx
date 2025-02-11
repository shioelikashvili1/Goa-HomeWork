import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Seahorses from './pages/Seahorses';
import Contact from './pages/Contact';
import SeahorseDetails from './components/SeahorseDetails';
import NewSeahorse from './components/NewSeahorse';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/seahorses" element={<Seahorses />}>
          <Route path=":id" element={<SeahorseDetails />} />
          {/* Nested Route */}
          <Route path="new" element={<NewSeahorse />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
