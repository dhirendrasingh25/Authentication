import React from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
