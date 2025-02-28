import { motion } from "motion/react";

export default function Topbar(){
    return <>

        <div className="flex flex-col justify-between  ">

            <motion.div initial ={{x:-40, y:0 ,  opacity:0}}
                animate = {{x:"45%" ,y:10  , opacity:1  }}
                transition =  {{duration: 0.5, delay: 0.3 }}
                className="text-2xl text-gray-50"
            >
                Hi there 
            </motion.div>
            
        </div>
    
    </>
}