import React from 'react'
import {Link} from "react-router-dom";

export default function Navigation() {

    return (
        <div className="fixed bg-slate-200 w-full p-2">
            <div className="container w-full mx-auto flex justify-between items-center">
                <span className="font-bold text-slate-500"><Link to={"/"}>Logo</Link></span>
                <span className="font-bold text-slate-500"><Link to={"/contacts"}>Contact</Link></span>
            </div>
        </div>
    )
}
