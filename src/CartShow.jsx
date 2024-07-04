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
    <div className="card " style={{maxWidth:'250px'}} >
        {/* <div className="card-header">

        </div> */}
        <div className="card-body text-center">
     <img src={product.img} alt="" height="180px" />
       <h6>Price:{product.price}</h6>
     
        </div>
        <div className="card-footer text-center" style={{maxHeight:'70px'}}>
        <h6 style={{fontSize:'15px'}}>{product.desc}</h6>
        {/* <button onClick={() => dispatch({type:'Remove', id:product.id})}>Remove</button> */}
        <button onClick={handleRemove}>Remove</button>
       

        </div>
    </div>

    </>
  )
}
