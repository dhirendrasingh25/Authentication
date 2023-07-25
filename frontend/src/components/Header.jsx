import React from 'react'
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <nav class='flex h-20 sticky z-40 top-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 z'>
    <div class="navbar bg-base-300 rounded-box">
<div class="flex-1 px-2 lg:flex-none">
<Link to='/'>
<a class=" font-semibold sm:text-3xl md:text-4xl font-sans text-xl hover:text-white">MERN Authentication</a>
</Link>  
</div> 
<div class="flex justify-end flex-1 px-2">
<div class="flex items-stretch">
  <div class="dropdown dropdown-end z-40">
    <label tabindex="0" class="btn btn-ghost  "><TableRowsIcon class='min-h-full min-w-full' /></label>
    <ul tabindex="0" class="menu dropdown-content z-40 p-2 shadow  bg-white rounded-box w-52 mt-4">
    <li><Link to='/login'><a  class='text-xl font-sans font-medium tex'>Log In</a></Link></li>
    <li><Link to='/register'><a  class='text-xl font-sans font-medium'>Sign Up</a></Link></li>
    </ul>
  </div>
</div>
</div>
</div>
</nav>
  )
}

export default Header