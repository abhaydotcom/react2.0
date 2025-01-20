import { useState } from "react"

const Background = () => {

  const[color,setcolor]=useState("black")

  

  return (
    <div className=" w-full h-screen flex justify-center items-end " style={{background:color}}>

        <div className="border bg-slate-300 rounded-md  p-2 m-7 w-full flex justify-between ">

            <button className="border border-black p-1 rounded-md font-mono text-md " style={{background:"red"}} onClick={ ()=> setcolor("red") } >Red</button>
            <button className="border border-black p-1 rounded-md font-mono text-md " style={{background:"green"}} onClick={ ()=> setcolor("green") } >Green</button>
            <button className="border border-black p-1 rounded-md font-mono text-md " style={{background:"yellow"}}  onClick={ ()=> setcolor("yellow") }>Yellow</button>
            <button className="border border-black p-1 rounded-md font-mono text-md " style={{background:"pink"}} onClick={ ()=> setcolor("pink") } >Pink</button>
            <button className="border border-black p-1 rounded-md font-mono text-md " style={{background:"blue"}} onClick={ ()=> setcolor("blue") } >Blue</button>
            <button className="border border-black p-1 rounded-md  font-mono text-md " style={{background:"grey"}} onClick={ ()=> setcolor("grey") } >Grey</button>
            <button className="border border-black p-1 rounded-md text-cyan-100 font-mono" style={{background:"black"}} onClick={ ()=> setcolor("black") }>Black</button>
        </div>



    </div>
  )
}

export default Background