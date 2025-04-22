import React from 'react'
import {Navigate, Outlet} from "react-router-dom";

export default function DirectRoutes() {
    const user = null
    return !user ? <Outlet/> : <Navigate to="/home"/>
}
