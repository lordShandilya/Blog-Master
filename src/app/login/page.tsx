import LogInForm from "@/components/loginPage/LogInForm"
import { LogIn } from "@/lib/loginAction"


export default function Page() {
    
   const loginUser = async (email: string, password: string) => {
        'use server'
        const [user, error] = await LogIn(email, password);

        if (error){
            return error;
        } else {
            return user;
        }
   }

    return (
        <div>
            <LogInForm logInUser={loginUser}/>
        </div>
    )
}

