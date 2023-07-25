import React from 'react'
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Header = () => {
  return (
    <nav class='flex h-20 sticky z-40 top-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 z'>
    <div class="navbar bg-base-300 rounded-box">
<div class="flex-1 px-2 lg:flex-none">
<a class=" font-semibold sm:text-3xl md:text-4xl font-sans text-xl hover:text-white">MERN Authentation</a>
</div> 
<div class="flex justify-end flex-1 px-2">
<div class="flex items-stretch">
  <div class="dropdown dropdown-end z-40">
    <label tabindex="0" class="btn btn-ghost  "><TableRowsIcon class='min-h-full min-w-full' /></label>
    <ul tabindex="0" class="menu dropdown-content z-40 p-2 shadow bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-box w-52 mt-4">
    <li><a href='/login' class='text-xl font-sans font-medium tex'>Log In</a></li>
    <li><a href='/register' class='text-xl font-sans font-medium'>Sign Up</a></li>
    </ul>
  </div>
</div>
</div>
</div>
</nav>
  )
}

export default Header