import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Bottombar } from './Bottombar'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

import React from 'react'

export const Layout = () => {
  return (
    <>
    <Sidebar/>
    <Navbar />
    <Outlet />
    <Bottombar/>
    
    </>
  )
}
