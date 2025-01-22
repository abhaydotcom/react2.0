
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"

import Home from "./Components/home"
import About from "./Components/About"
import Contact from "./Components/contact"
import Layout from "./Components/layout"
import User from "./Components/user"
import { userdata } from "./Components/user"

  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route   path="/" element={<Layout/>} >

      <Route path="" element={<Home/>}   />
      <Route path="about" element={<About/>}   />
      <Route path="contact" element={<Contact/>}   />
      <Route path="user" element={<User/>} loader={userdata}  />
    </Route>
  ) 
)




function App() {
  

  return (
    <>
    <RouterProvider router={router} />
   
    </>
  )
}

export default App
