import React, { useContext } from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import { CartContext } from './Context/ContextProvider';
import { MdLocalOffer } from "react-icons/md";

const Quickview = ({ id,img, price, desc,details,offers}) => {

    const { dispatch,cart } = useContext(CartContext);
  
 const nav= useNavigate()
 const nav1 = useNavigate()
   const product1 = { img, price, desc,id ,details,offers}

    const handleAddtoCart=()=>{
      dispatch({type:'Add',product})
      nav('/cart')
    }
   
  const isInCart = cart.find(item => item.id === id);
  const location = useLocation();
  const { product } = location.state 

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
<div className="container my-5">
<div className="row">
    <div className="col-md-12 text-center">
    <button className='btn btn-success mb-3' onClick={()=>nav1('/shop')}>Go Back</button>
    </div>
    <div className="col-lg-6 ">
      <div class="h-100 d-flex justify-content-center">
       <img src={product.img} alt="" class="img-fluid w-50"/>
     </div>
    </div>

    <div class="col-12 col-lg-6  p-3 pe-0 pe-lg-5 d-flex flex-column align-items-center align-items-lg-start">
        <div class="product-heading text-center text-lg-start">
            <h3>{product.desc}</h3>
            <h4 class="mt-2">Price: <span className='text-danger'>{product.price}</span></h4>
            <h5>Rating: 4.1/5<span class="px-4">In Stock: 259</span></h5>
        </div>

        <div class="mt-1 mt-lg-3 text-center text-lg-start">    
            <div class=" text-center text-lg-start my-1">
              <button class="btn btn-dark w-100" fdprocessedid="maosur"onClick={handleAddtoCart} >Add To Cart</button> 
                <button class="btn btn-outline-success w-100 my-2" fdprocessedid="o9m9f">Proceed To Buy</button>
            </div>
        </div>

        <div class="mt-4  text-center text-lg-start">
           <h5>Details</h5>
          <span>{product.details} </span>
         
         </div>

         
     </div>
</div>
</div>
  );
};

export default Quickview;
