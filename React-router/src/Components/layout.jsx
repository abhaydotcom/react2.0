import React from 'react'
import Header from './Header/header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout