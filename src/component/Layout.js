import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'

const Layout = ({children}) => {
  return (
    <div >
   <Header/>
   <Menu/>
   <main  style={{minHeight:"80vh"}}>
{children}
   </main>

   <Footer/>
      
    </div>
  )
}

export default Layout
