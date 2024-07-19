import React from 'react'
import HeaderComponent from './HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './FooterComponent'

function Layout() {
  return (
    <div className="container">
        <HeaderComponent/>
        <main style={{ height: '90vh', backgroundColor: 'antiquewhite', padding: '1rem'}}>
            <Outlet/>
        </main>
        <FooterComponent/>
    </div>
  )
}

export default Layout