import React from 'react'
import Header from './components/Header'
import Home from './screens/Home'
import Login from './screens/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './screens/Register';
import ProfileScreen from './screens/ProfileScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
  <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routes>
        <Route index={true} path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/profile" element={<ProfileScreen />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
