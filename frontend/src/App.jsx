import React from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import Login from './screens/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './screens/Register';

const App = () => {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
