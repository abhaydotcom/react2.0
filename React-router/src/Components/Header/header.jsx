import React from 'react'

import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-10  w-full bg-white flex justify-evenly   font-serif text-xl underline   ' >  
       
            <NavLink to='/' className={({isActive})=> `${isActive?" text-purple-600":"text-black"  }
           `}  >Home</NavLink>
            
            
                <NavLink  className={({isActive})=> `${isActive?" text-purple-600":"text-black"}`} to='about' >About</NavLink>
           
                <NavLink  className={({isActive})=> `${isActive?"text-purple-600":"text-black"}`} to='contact'>Contact Us</NavLink>
                <NavLink  className={({isActive})=> `${isActive?"text-purple-600":"text-black"}`} to='user'>User</NavLink>
                
        

    </div>
  )
}

export default Header