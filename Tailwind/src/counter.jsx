import React from 'react'
import { useActionState } from 'react'
import { useState} from 'react'

const Count = () => {

const[con,setcon]=useState(0);

const  handle1=()=>{
    setcon(con+1);
}

const handle2=()=>{
    setcon(con-1);
}


  return (
    <div className='bg-blue-300  h-80   rounded-2xl  '>
        <div className='p-4'><h1 className='font-extrabold '>Counter App</h1></div>

        <div className='p-2 '><h2 className='text-2xl'>{con}</h2></div>

        <div  className=' m-20 p-5  font-bold'>
            
            <button className='mr-10     border rounded-md p-1  bg-green-400 hover:bg-green-800' onClick={handle1}>Increase</button>

            <button className='border rounded-md p-1 bg-red-400 hover:bg-red-700' onClick={handle2}>Decrease</button>

            
            </div>
        
  
    </div>
  )
}

export default Count