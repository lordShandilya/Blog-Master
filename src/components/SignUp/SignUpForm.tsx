'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUpForm =  ({signUpUser}) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
    const router = useRouter();

    
    const handleSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();
        signUpUser(email, password)
        router.push('/signup/verification');
    }

    return(
        <div className="flex items-center justify-center h-80 m-40">
            
            <form onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center p-10 border-2 rounded-md form-bg shadow-md h-100"
            >
               <h1 className="text-3xl text-white bg-transparent ">Sign<span className="text-blue-700 bg-transparent">Up</span></h1>
               
                <input type="text" value={email} placeholder="Email" onChange={(e)=> {setEmail(e.target.value)}}
                className="border-2 border-white rounded-md m-3 p-4"
                />
                <input type="password" value={password} placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} 
                className="border-2 border-white rounded-md m-3 p-4"
                />
                <input type="password"  placeholder="Confirm Password" onChange={(e) => {
                    if(e.target.value != password){
                        setPasswordMatch(false);
                    }else{
                        setPasswordMatch(true);
                    }

                }} 
                className="border-2 border-white rounded-md m-3 p-4"
                />
                {passwordMatch===false && (
                    <span className="text-red-700">The password does not match</span>
                )}
                <button type="submit"
                className="sub-button p-4 border-2 rounded-md m-4 shadow-md text-white"
                >Sign <span className="text-blue-700 font-semibold">Up</span></button>
            </form>
        </div>
    )
}

export default SignUpForm;