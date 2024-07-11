import React, { useContext } from 'react'
import { CartContext } from './Context/ContextProvider'
export const CartShow = ({product}) => {
    const {dispatch} = useContext(CartContext)

  const handleRemove = () => {
    // console.log('Removing product with id:', product.id);
    dispatch({ type: 'Remove', id: product.id });
  };

  return (
    <>
    <div className="card my-3 " style={{maxWidth:'255px'}} >
        {/* <div className="card-header">

        </div> */}
        <div className="card-body text-center" style={{maxHeight:'274px'}}>
     <img src={product.img} alt="" height="180px" />
     <h6 style={{fontSize:'15px'}}>{product.desc}</h6>
        { <h6>Price:{product.price}</h6>} 
   
        </div>
        <div className="card-footer text-center" style={{maxHeight:'80px'}}>
      
        {/* <button onClick={() => dispatch({type:'Remove', id:product.id})}>Remove</button> */}
        <button onClick={handleRemove} className='btn btn-danger'>Remove</button>
       

        </div>
    </div>

    </>
  )
}


