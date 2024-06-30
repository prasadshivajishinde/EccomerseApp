import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar'
import Home  from './Home'
import Service from './Service'





const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/about' element={<Home/>}></Route>


        </Routes>
      </Router>
    </>
  )
}

export default App