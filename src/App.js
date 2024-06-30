import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'
import Home  from './home'
import Service from './Service'





const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
       


        </Routes>
      </Router>
    </>
  )
}

export default App