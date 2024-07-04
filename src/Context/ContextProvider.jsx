import React, { createContext, useEffect, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const ContextProvider = ({children}) => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

    const[cart, dispatch] = useReducer(CartReducer,initialCart)

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  return (
    <CartContext.Provider value={{cart,dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export default ContextProvider