import React from 'react'
import {Navigate, Outlet} from "react-router-dom";

export default function ProtectRoutes() {
    const user = null
    return user ? <Outlet/> : <Navigate to="/login"/>
}
