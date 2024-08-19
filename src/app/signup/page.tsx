import SignUpForm from "@/components/SignUp/SignUpForm";
import { handleSignUp } from "@/lib/signupAction";

export default function Page() {
    const signUp = async (email: string, password: string): Promise<void> =>{
        'use server'
        const user = await handleSignUp(email, password);
    }

    return(
        <SignUpForm signUpUser={signUp}/>
    )
}