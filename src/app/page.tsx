"use client"
import { 
  motion, 
  useScroll, 
  useSpring, 
} from "framer-motion";
import { Topic } from "./sections/Topic";

export default function Home() {
  const {scrollY} = useScroll();
  const rotate = useSpring(scrollY);

  return (
    <div className="relative flex bg-blue-400">
      <div className="z-10 w-3/5 mx-10">
        <Topic />
        <Topic />
        <Topic />
      </div>

     <div className="fixed right-0 h-screen w-2/5 flex justify-center items-center">
        <motion.div 
          className="w-[400px] h-[400px] bg-white border-4 border-green-700 rounded-lg"
          style={{ rotate }} />
      </div>
      
    </div>
  )
}
