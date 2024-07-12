// import React, { useContext } from 'react'
// import { CartContext } from './Context/ContextProvider'
// import { CartShow } from './CartShow'
// import { useNavigate } from 'react-router-dom'

// const Cart = () => {
//   const nav = useNavigate()
// const {cart} = useContext(CartContext)

// const Navigatepage=()=>{
//   nav('/shop')
// }

//   return (
//     <>
        
//        <div className="container">
//           <div className="row">
//           { cart.length === 0 ? (
//             <div className="col-md-12 text-center my-3">
//               <h2 className='text-danger fw-bold'>Your Cart is Empty</h2>
//               <button className='btn btn-info text-dark'onClick={Navigatepage} >Continue Shopping</button>
//             </div>
//           ):
//           cart.map((p,index) => (
//         <div className="col-lg-9 my-2" key={index} >
//           <CartShow product={p} />
//         </div>
//       ))}

      
//         {cart.length > 0 && (
//             <div className="col-lg-3" style={{position:'fixed' ,width:'20%',top:'90px' ,right:'0'}}>
//             <div className="p-3 bg-light border rounded">
//               <h5 className="bg-dark text-light p-3">Order Summary</h5>
//               <h6 className="mt-3">Total Items: {cart.length}</h6>
//               <h6>Total Price: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h6>
//               <button className="btn btn-success mt-3 w-100">Proceed to Checkout</button>
//             </div>
//           </div>
//         )} 
//            </div>
//        </div>

//     </>
//   )
// }

// export default Cart




import React, { useContext } from 'react';
import { CartContext } from './Context/ContextProvider';
import { CartShow } from './CartShow';
import { useNavigate } from 'react-router-dom';
import { totalPrice } from './Context/CartReducer';
import { FaRupeeSign } from "react-icons/fa";
import './cartstyle.css'
import Footer from './Footer';

const Cart = () => {
  const nav = useNavigate();
  const { cart } = useContext(CartContext);

  const Navigatepage = () => {
    nav('/shop');
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };
  return (
    <>
      <div className="container mt-4">
        {cart.length === 0 ? (
          <div className="text-center my-5">
            <h2 className="text-danger fw-bold">Your Cart is Empty</h2>
            <button className="btn btn-info text-dark" onClick={Navigatepage}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-items-section">
                <h5 className="section-header">My Cart ({cart.length})</h5>
                {cart.map((p, index) => (
                  <div className="cart-item" key={index}>
                    <CartShow product={p} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-summary fixed-summary">
                <h5 className="section-header text-danger">Order Summary</h5>
                <h6>Total Items: {cart.length}</h6>
                {/* <h6>Total Price: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h6> */}
                <h6>Total Price:<FaRupeeSign /> {formatPrice(totalPrice(cart))}</h6>
                <button className="btn btn-success mt-3 w-100">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
        
      </div>

     
    </>
  );
};

export default Cart;
