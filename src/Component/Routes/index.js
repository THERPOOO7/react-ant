import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Category from '../../Pages/Category';
// import Home from '../../Pages/Home'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Category/>}/>
        <Route path='/:categoryId' element={<Category/>}/>
    </Routes>
    
  )
}

export default AppRoutes