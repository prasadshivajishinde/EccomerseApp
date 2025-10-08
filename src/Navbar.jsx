

// import React, { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { MdAccountCircle } from 'react-icons/md';
// import { FaCartPlus } from 'react-icons/fa6';
// import { CartContext } from './Context/ContextProvider';
// import { useAuth } from './Context/AuthProvider';

// const Navbar = () => {
//   //here we use logout and stored user from Authcontext
//   const { storeduser, logout } = useAuth();

//   const { cart } = useContext(CartContext);
//   const nav= useNavigate()

//   //Logout user 
//   const handleLogout=()=>{
//     logout();
//     nav('/login')

//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
//         <div className="container-fluid">
//           <NavLink to="/" className="navbar-brand nav-link">
//             {/* <img src="./images/logo3.png" alt="" height="50px" /> */}
//             <h4>MobileMart</h4>
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <form className="d-flex ms-5">
//               <input className="form-control me-2" type="search" placeholder="Search for Products" />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//             <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link fw-bold">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/shop" className="nav-link fw-bold">
//                   Shop
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/cart" className="nav-link fw-bold">
//                   <FaCartPlus style={{ fontSize: '20px' }} /> {cart.length} Cart
//                 </NavLink>
//               </li>

//               <li className='nav-item'>
//               {
//                 storeduser ? (
//                   <div className="nav-link">
//                <MdAccountCircle style={{fontSize:'28px'}} /> Welcome {storeduser.name}
//                <button className="btn btn-danger mx-2" onClick={handleLogout} style={{ textDecoration: 'none', color: 'white' }}>
//                       Logout
//                     </button>
//                   </div>
//                 ):(
//                   <NavLink to="/account" className="nav-link fw-bold">
//                   <MdAccountCircle style={{ fontSize: '28px' }} /> Account
//                 </NavLink>
//                 )
//               }

//               </li>
           
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { FaCartPlus } from 'react-icons/fa6';
import { CartContext } from './Context/ContextProvider';
import { useAuth } from './Context/AuthProvider';

const Navbar = ({ onSearch }) => {
  const { storeduser, logout } = useAuth();
  const { cart } = useContext(CartContext);
  const nav = useNavigate();

  const handleLogout = () => {
    logout();
    nav('/login');
  };




  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand nav-link">
          <h4>MobileMart</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Real-time search input */}
          <div className="d-flex ms-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Products"
              onChange={(e) => {
                if (onSearch && typeof onSearch === 'function') {
                  onSearch(e.target.value); // Only call if onSearch exists
                }
              }}
            />
          </div>

          <ul className="navbar-nav mb-2 mb-lg-0 m-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link fw-bold">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav-link fw-bold">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link fw-bold">
                <FaCartPlus style={{ fontSize: '20px' }} /> {cart.length} Cart
              </NavLink>
            </li>
            <li className="nav-item">
              {storeduser ? (
                <div className="nav-link">
                  <MdAccountCircle style={{ fontSize: '28px' }} /> Welcome {storeduser.name}
                  <button className="btn btn-danger mx-2" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <NavLink to="/account" className="nav-link fw-bold">
                  <MdAccountCircle style={{ fontSize: '28px' }} /> Account
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
