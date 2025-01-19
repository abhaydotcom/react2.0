import { useState } from "react";

const Count = () => {

    const [cou,setcou]=useState(0);

    const counter1=()=>{
        setcou(cou+1);
    }

    const counter2=()=>{
        setcou(cou-1);
    }

  return (
  

   <div className="bg-slate-500 border-red-600 flex justify-center align-middle">
  
   <h1 className='bg-slate-700'  >Counter App</h1>
   
   <div><h1>{cou}</h1></div>

  
   <div><button onClick={counter1}>Increase</button></div>
  
   <div><button onClick={counter2}>Decrease</button></div>
  
   </div>
   
  )
}

export default Count