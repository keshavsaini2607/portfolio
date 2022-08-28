import React from 'react'
import Navbar from './Navbar'
import ProfileNav from './Navbar/ProfileNav'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <ProfileNav />
        <>
            {children}
        </>
    </div>
  )
}

export default Layout