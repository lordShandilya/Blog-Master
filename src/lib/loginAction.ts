import { AuthError, AuthTokenResponsePassword } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";
import { log } from "console";

const LogIn = async (email: string, password: string): Promise<[User |null, AuthError | null]> => {
    const {data, error}: AuthTokenResponsePassword = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })

    if(error) {
        log('Error in signing in', error);
    } else {
        log('Signed in user: ', data.user);
    }

    return [data.user, error];
}

export {
    LogIn
}