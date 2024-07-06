import React, { useContext } from 'react'
import { CartContext } from './Context/ContextProvider';
import {useNavigate}  from 'react-router-dom'
const Mobileshow = ({ id,img, price, desc }) => {
  const { dispatch } = useContext(CartContext);
  const {cart} = useContext(CartContext)

    const product = { img, price, desc,id }

    const nav= useNavigate()

    const handleAddtoCart=()=>{
      dispatch({type:'Add',product})
      nav('/cart')
    }

     const isInCart = cart.find(item => item.id === id);
  

  return (
    <div>
<div className="container">
    <div className="card " style={{maxWidth:'250px'}}>
         {/* <div className="card-header bg-light">

        </div>  */}
        <div className="card-body text-center" style={{maxHeight:'290px'}}>
        <img src={img} alt="" height="180px" />

        <h6 style={{fontSize:'15px'}}>{desc}</h6>
        <p> Price:{price}</p>
    
        </div>
        <div className="card-footer text-center" >
        {isInCart ? (
              <button className='btn btn-secondary mx-2' onClick={() => nav('/cart')}>View Cart</button>
            ) : (
              <button className='btn btn-primary mx-2' onClick={handleAddtoCart}>Add To Cart</button>
            )}
            <button className='btn btn-danger'>Buy Now</button>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Mobileshow


// import React, { useContext } from 'react';
// import { CartContext } from './Context/ContextProvider';


// const Mobileshow = ({ img, price, desc }) => {
//   const { dispatch } = useContext(CartContext);

//   const product = { img, price, desc }; // Create a product object to dispatch

//   return (
//     <div className="container">
//       <div className="card" style={{ maxWidth: '250px' }}>
//         <div className="card-body text-center" style={{ maxHeight: '265px' }}>
//           {img ? <img src={img} alt="" height="180px" /> : <div>No image available</div>}
//           <h6 style={{ fontSize: '15px' }}>{desc || 'No description available'}</h6>
//           <p>Price: {price || 'N/A'}</p>
//         </div>
//         <div className="card-footer text-center">
//           <button
//             className="btn btn-primary"
//             onClick={() =>{ console.log(product) ;dispatch({ type: 'Add', product })}}
//           >
//             Add To Cart
//           </button>
//           <button className="btn btn-danger">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mobileshow;
