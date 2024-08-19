import { log } from "console";
import { supabase } from "./supabaseClient";

const LogOut = async () => {
    const {error} = await supabase.auth.signOut();
    if (error) {
        log('Failed: ', error);
    }
}

export {
    LogOut
}