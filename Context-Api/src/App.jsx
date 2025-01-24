import Login from "./components/login"
import Profile from "./components/profile"
import UserContextProvider from "./context/userContextProvider"
import { CounterContext } from "./context2/theme"
import { useState } from "react"
import Basic from "./components/basic"
import Basic2 from "./components/basic2"


function App(){ 

  const[count,setCount]=useState(0);

const handle=()=>{
  setCount(count+1);
}

  return(

    // This is used in components and context 1 !!
    // <UserContextProvider >
    //   <h1>Context-API  </h1>
    //   <Login/>
    //   <Profile/>
    // </UserContextProvider>

      <>

      <CounterContext.Provider value={count}>


      <h1>Count is: {count}</h1>
      <br />
      <br />
      <br />
      <button onClick={handle} className=" p-1 border rounded-md bg-slate-800 text-white " >Increase</button>

<Basic2/>
            </CounterContext.Provider>
            </>

  )
}

export default App
