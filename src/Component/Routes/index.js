import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './../Home';
import Category from '../../Pages/Category';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:categoryId' element={<Category/>}/>
    </Routes>
    
  )
}

export default AppRoutes