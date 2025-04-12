import React from 'react'


export default function Authentication() {
    return (<div className="flex-center h-screen">
        <div className="card w-full max-w-86 mx-auto">
            <form className="flex flex-col gap-2">
                <input type="text" id="e" placeholder="Enter email..."/>
                <input type="password"  id="p" placeholder="Enter password..."/>
                <button type="submit">submit</button>
            </form>
        </div>
    </div>)
}
