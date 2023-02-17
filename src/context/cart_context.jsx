import { useContext, useReducer, useEffect } from 'react'
import { createContext } from 'react'
import cart_reducer from '../reducers/cart_reducer'
import { ADD_TO_CART } from '../actions'

const CartContext = createContext()

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')

  if (cart) {
    return JSON.parse(cart)
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  item_amount: 0,
  shipping: 1500,
  total_price: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  const removeItem = () => {}

  const toggleAmount = (id, value) => {}

  const clearCart = () => {}

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
