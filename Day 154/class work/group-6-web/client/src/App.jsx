import React from 'react'
import {Route, Routes} from "react-router-dom";
import Authentication from "./pages/Authentication.jsx";
import ProtectRoutes from "./hooks/protect-routes.jsx";
import DirectRoutes from "./hooks/direct-routes.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
    return (
        <div>

            <Routes>

                <Route path="/" element={<ProtectRoutes/>}>
                    <Route path="/home" element={<Home/>}/>
                </Route>

                <Route path="/auth" element={<Authentication/>}/>
                <Route path="*" element={<div>not found</div>}/>
            </Routes>
        </div>
    )
}
