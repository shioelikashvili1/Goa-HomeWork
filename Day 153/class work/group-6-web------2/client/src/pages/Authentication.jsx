import React from 'react'


export default function Authentication() {
    return (
        <section className="flex-center h-screen flex flex-col justify-center items-start">
            <div className="w-full max-w-86 mx-auto">
                <h2 className="my-2">Login</h2>
                <div className="card">
                    <form className="flex flex-col gap-2">
                        <input type="text" id="e" placeholder="Enter email..."/>
                        <input type="password" id="p" placeholder="Enter password..."/>
                        <button type="submit">submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
