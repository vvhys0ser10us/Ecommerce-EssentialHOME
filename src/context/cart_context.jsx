import { useContext, useReducer, useEffect } from 'react'
import { createContext } from 'react'
import cart_reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
  CALCULATE_TOTAL,
} from '../actions'

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
  shipping: 1500,
  total_price: 0,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    dispatch({ type: CALCULATE_TOTAL })
  }, [state.cart])

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, value } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

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
