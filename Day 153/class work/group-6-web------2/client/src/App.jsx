import React from 'react'
import {Route, Routes} from "react-router-dom";
import Authentication from "./pages/Authentication.jsx";
import ProtectRoutes from "./hooks/protect-routes.jsx";
import Home from "./pages/Home.jsx";
import Registration from "./pages/Registration.jsx";
import Navigation from "./components/Navigation.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<ProtectRoutes/>}>
                        <Route path="/home" element={<Home/>}/>
                    </Route>
                    <Route path="/login" element={<Authentication/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
        </>

    )
}
