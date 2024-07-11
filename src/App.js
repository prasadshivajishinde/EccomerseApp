import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home  from './home'
import Shop from './Shop'
import Account from './Account'
import Cart from './Cart'
import Quickview from './Quickview'
import Login from './Accountdetails/Login'
import { AuthProvider } from './Context/AuthProvider'



const App = () => {
  return (
    <> 
  
      <Router>
      <AuthProvider>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
         <Route path='/account' element={<Account/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/quickview/:id' element={<Quickview/>}></Route>

        </Routes>
        </AuthProvider>
      </Router>
      
    </>
  )
}

export default App







