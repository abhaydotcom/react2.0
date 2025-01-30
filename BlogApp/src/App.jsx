 
import './App.css'
import Conf from './conf/conf'
import { Header,Footer } from './component'
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./store/AuthSlice"
import { Outlet } from 'react-router-dom'
function App() {

  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();

  useEffect( ()=>{
      authService.getCurrentUser()
      .then( (userData)=>{
        if(userData){
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } )
      .finally(()=> setLoading(false))
  } ,[] )

    return !loading ? (
      <div className='min-h-screen flex flex-wrap bg-blue-400 content-between'>
         
          <div className='w-full block'>
              <Header/>
  <Outlet/>

              <Footer/>

          </div>
      </div>
    ) : null


}

export default App
