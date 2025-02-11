export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    CONTACTS: "/contacts",
};
import React from "react";

const Home = () => {
    return <h1>Welcome to the Home Page</h1>;
};

export default Home;
import React from "react";

const About = () => {
    return <h1>About Us</h1>;
};

export default About;
import React from "react";

const Contacts = () => {
    return <h1>Contact Us</h1>;
};

export default Contacts;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";

const App = () => {
    return (
        <Router>
            <nav style={{ marginBottom: "20px" }}>
                <Link to={ROUTES.HOME} style={{ marginRight: "10px" }}>Home</Link>
                <Link to={ROUTES.ABOUT} style={{ marginRight: "10px" }}>About</Link>
                <Link to={ROUTES.CONTACTS}>Contacts</Link>
            </nav>

            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.CONTACTS} element={<Contacts />} />
            </Routes>
        </Router>
    );
};

export default App;
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACTS: "/contacts",
};
export default function Home() {
  return <div className="text-center text-xl p-5">Welcome to the Home Page!</div>;
}
export default function Contacts() {
  return <div className="text-center text-xl p-5">Get in touch with us here!</div>;
}