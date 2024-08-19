'use client'

import { useRouter } from "next/navigation"

export default function CreateBlog() {
    
    const router = useRouter();
    return (
        <div className="greeting">
            <div className="text-7xl font-bold">Create a <span className="text-blue-700">blog</span></div>
            <div className="w-96 my-10 font-semibold">
                <p>Share your stories and ideas to the world. Stand out with a professionally-designed blog website that can be customized to fit your brand. </p>
            </div>
            <div>
               <button type="button"
               onClick={() => {
                    router.push('/login')
               }}
               className="bg-white p-4 border-r-4 border-2"
              id="animate"
               > <span className="text-black font-semibold">Get</span> <span className="font-semibold text-blue-700">Started</span>
               </button>
            </div>
        </div>
    )
}