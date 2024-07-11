
export const totalPrice = (cart)=>{
  return cart.reduce((total,item)=> total + item.price ,0)
}

const CartReducer = (state, action) => {
    switch (action.type) {
      case 'Add':
        return [...state, action.product];
      
      
      
      case 'Remove':
        console.log('Removing product with id:', action.id); // Added log
        const newState = state.filter(p => p.id !== action.id);
        console.log('State after:', newState); // Added log
        return newState;
      
      case 'Increase':
        // // Implement logic to increase quantity if needed
        // return state.map(product =>
        //   product.id === action.id ? { ...product, quantity: product.quantity + 1 } : product
        // );
      
      default:
        return state;
    }
  };
  

export default CartReducer