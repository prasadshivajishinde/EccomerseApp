import React, { useContext } from 'react'
import { CartContext } from './Context/ContextProvider'
import { useNavigate } from 'react-router-dom';
const Show = ({id,img,desc,price,details}) =>
{
  // const { dispatch,cart } = useContext(CartContext);
  const product = { img, price, desc,id,details}

  const nav = useNavigate()
  const handledata=()=>{
    nav(`/quickview/${id}`,{ state: { product } })
  }
  return (  
    <div>
   <div className="container">
    <div className="card " style={{maxWidth:'250px'}} id="homecard" onClick={handledata}>
        {/* <div className="card-header">

        </div> */}
        <div className="card-body text-center">
     <img src={product.img} alt="" height="180px"   />
    
        </div>
        <div className="card-footer text-center" style={{maxHeight:'70px',fontFamily:'cursive'}}>
        <h6 style={{fontSize:'15px'}}>{product.desc}</h6>
        <h6 style={{fontSize:'15px'}}>Price:{product.price}</h6>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Show