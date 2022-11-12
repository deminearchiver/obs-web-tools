import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import "./App.scss"

const App = () => {
  return (
    <div className="app">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default App