import React, { useContext } from 'react'
import { CartContext } from './Context/ContextProvider'
import { CartShow } from './CartShow'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const nav = useNavigate()
const {cart} = useContext(CartContext)

const Navigatepage=()=>{
  nav('/shop')
}
  return (
    <>
        
       <div className="container">
          <div className="row">
          { cart.length === 0 ? (
            <div className="col-md-12 text-center my-3">
              <h2 className='text-danger fw-bold'>Your Cart is Empty</h2>
              <button className='btn btn-info text-dark'onClick={Navigatepage} >Continue Shopping</button>
            </div>
          ):
          cart.map((p,index) => (
        <div className="col-lg-3 col-md-6 my-3" key={index}>
          <CartShow product={p} />
        </div>
      ))}
          
            <div className="col-md-4">
            
            </div>
           </div>
       </div>
    </>
  )
}

export default Cart