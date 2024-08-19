import { Button } from "@/components/ui/button";
import CreateBlog from "@/components/CreateBlog/CreateBlog";


export default function Home() {
  return(
    <div className="landing-page" >
      <div className="big-logo">
        <span className="text-blue-700 text-7xl">Blog</span> 
        <span className="text-white text-7xl">Master</span>
      </div>
      <CreateBlog route={'/signup'}/>
    </div>
  )
}