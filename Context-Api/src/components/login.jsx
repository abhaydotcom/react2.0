import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const {setuser}=useContext(UserContext)

    const handleSubmit=(w)=>{
        w.preventDefault();
        setuser({username,password}) 
    }

  return (
    <div className='bg-slate-600 h-60 '>
        <h1>  Login  </h1>
            <br />
        <input  
        type='text'
        placeholder='Username'
        value={username}
        onChange={e=>setUsername(e.target.value)}
        className='rounded-lg bg-slate-300'
        />

        <br />
        <br />
        <input
        type='text'
        placeholder='password'
        value={password}
        onChange={e=>setPassword(e.target.value)}
         className='rounded-lg bg-slate-300'
        />
        <br />
        <br />

        <button className='border p-1 rounded-md' onClick={handleSubmit} >Submit</button>

    </div>
  )
}

export default Login