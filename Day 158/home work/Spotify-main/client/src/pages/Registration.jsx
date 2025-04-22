import React, {useEffect, useState} from 'react'
import {ageSelector, countries} from "../constants/index.js";
import axios from "axios";
import bcrypt from "bcryptjs";

const REGISRTER = ""
export default function Registration() {

    // http://localhost:5000/auth/signup
    const [data, setData] = useState({
        name: "",
        surname: "",
        gmail: "",
        password: "",
        age: 0,
    })
    const handleSendData = async (e) => {
        e.preventDefault()
        setData({...data, password: await bcrypt.hash(data.password, 10)});
        console.log(data)
        try {
            await axios.post("http://localhost:5000/auth/signup", data)

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="flex-center h-screen flex flex-col justify-center items-start">
            <div className="w-full max-w-86 mx-auto">
                <h2 className="my-2">Register</h2>
                <div className="card">
                    <form className="flex flex-col gap-2">
                        <input
                            onChange={(e) => setData({...data, name: e.target.value})}
                            type="text"
                            value={data.name}
                            placeholder="Enter Name..."/>
                        <input
                            onChange={(e) => setData({...data, surname: e.target.value})}
                            type="text"
                            value={data.surname}
                            placeholder="Enter Surname..."/>
                        <input
                            onChange={(e) => setData({...data, gmail: e.target.value})}
                            type="email"
                            value={data.gmail}
                            placeholder="Enter Email..."/>
                        <select onChange={e => setData({...data, age: Number(e.target.value)})}>
                            {ageSelector.map((number) => (
                                <option
                                    key={number}
                                    value={number}
                                >{number}</option>
                            ))}
                        </select>
                        <label>
                            Select Country
                        </label>
                        {/*<select onChange={e => setData({...data, age: Number(e.target.value)})}>*/}
                        {/*    {countries.map((number) => (*/}
                        {/*        <option*/}
                        {/*            key={number.name}*/}
                        {/*            value={number.name}*/}
                        {/*        >{number.name}</option>*/}
                        {/*    ))}*/}
                        {/*</select>*/}
                        <input
                            type="password"
                            placeholder="Enter password..."
                            onChange={(e) => setData({...data, password: e.target.value})}
                        />
                        <button
                            onClick={(e) => handleSendData(e)}
                            type="submit">submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
