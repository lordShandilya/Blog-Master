'use client'
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";


export default function LogInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState< string | null >(null);

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    
    return (
        <div className="flex items-center justify-center h-80 m-40">
            
            <form onSubmit={handelSubmit}
            className="flex flex-col items-center justify-center p-10 border-2 rounded-md form-bg shadow-md h-96"
            >
                <h1 className="text-3xl text-white bg-transparent ">Log<span className="text-blue-700 bg-transparent">In</span></h1>
                <input type="text" value={email} placeholder="Email" onChange={(e)=> {setEmail(e.target.value)}}
                className="border-2 border-white rounded-md m-3 p-4"
                />
                <input type="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} 
                className="border-2 border-white rounded-md m-3 p-4"
                />
                <button type="submit"
                className="sub-button p-4 border-2 rounded-md m-4 shadow-md text-white"
                >Sign <span className="text-blue-700 font-semibold">Up</span></button>
            </form>
        </div>
    )
}