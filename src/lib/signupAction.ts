import { AuthResponse } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";

const handleSignUp = async (email: string, password: string) => {
    try {
        const { data, error }: AuthResponse = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            console.error("Error signing up: ", error.message);
            
        } else {
            console.log("Signed up user: ", data.user);
            return data.user;
        }
    } catch (error: any) {
        console.error("Error signing up: ", error.message);
    }
}



export {
    handleSignUp
}