import { useContext, useReducer } from 'react'
import { createContext } from 'react'
import cart_reducer from '../reducers/cart_reducer'

const CartContext = createContext()

const initialState = {
  cart: [],
  total_items: 0,
  item_amount: 0,
  shipping: 1500,
  total_price: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState)

  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
