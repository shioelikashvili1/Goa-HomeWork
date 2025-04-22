import React from 'react'
import {notFound} from "../constants/index.js";

export default function NotFound() {
    return (
        <div className="flex-center h-screen">
            <div className="card">
                <div className="flex items-center gap-1">
                    <div className="not-animation w-fit">
                        <span>&#128533;</span>
                    </div>
                    <span className="font-bold">{notFound.title}</span>
                </div>
                <p className="max-w-56">{notFound.paragraph}</p>
            </div>
        </div>
    )
}
