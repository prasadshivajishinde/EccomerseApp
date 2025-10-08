// import React from 'react'
// import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import Navbar from './Navbar'

// import Shop from './Shop'
// import Account from './Account'
// import Cart from './Cart'
// import Quickview from './Quickview'
// import Login from './Accountdetails/Login'
// import { AuthProvider } from './Context/AuthProvider'
// import Footer from './Footer'
// import Home from './home'



// const App = () => {
//   return (
//     <> 
  
//       <Router>
//       <AuthProvider>
//         <Navbar/>
//         <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/shop' element={<Shop/>}></Route>
//          <Route path='/account' element={<Account/>}></Route> 
//         <Route path='/cart' element={<Cart/>}></Route>
//         <Route path='/login' element={<Login/>}></Route>
//         <Route path='/quickview/:id' element={<Quickview/>}></Route>

//         </Routes>
//         </AuthProvider>
//         <Footer/>
//       </Router>
//     </>
//   )
// }

// export default App






import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Shop from './Shop';
import Account from './Account';
import Cart from './Cart';
import Quickview from './Quickview';
import Login from './Accountdetails/Login';
import { AuthProvider } from './Context/AuthProvider';
import Footer from './Footer';
import Home from './home';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <NavbarWrapper />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/account' element={<Account />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quickview/:id' element={<Quickview />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

// Wrapper to conditionally render Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  const hideNavbarOn = ['/shop']; // Pages where Navbar should be hidden

  if (hideNavbarOn.includes(location.pathname)) {
    return null; // Hide Navbar
  }

  return <Navbar />;
};

export default App;



