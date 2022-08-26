import React from 'react'
import Navbar from './Navbar'
import ProfileNav from './Navbar/ProfileNav'

const Layout = ({children, show, setShow}) => {
  return (
    <div>
        <Navbar show={show} setShow={setShow} />
        <ProfileNav />
        <>
            {children}
        </>
    </div>
  )
}

export default Layout