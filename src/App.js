import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home  from './home'
import Shop from './Shop'
import Account from './Account'
import Cart from './Cart'





const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/account' element={<Account/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
       


        </Routes>
      </Router>
    </>
  )
}

export default App