import { ADD_TO_CART, CLEAR_CART, REMOVE_ITEM, TOGGLE_AMOUNT } from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    let temp = state.cart.find((item) => item.id === id + color)
    if (temp) {
      const newCart = state.cart.filter((item) => item.id !== temp.id)
      let newAmount =
        temp.amount + amount > temp.max ? temp.max : temp.amount + amount
      temp = { ...temp, amount: newAmount }
      return { ...state, cart: [...newCart, temp] }
    } else {
      const newItem = {
        id: id + color,
        amount,
        price: product.price,
        max: product.stock,
        img: product.images[0].url,
        color,
        name: product.name,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if (action.type === REMOVE_ITEM) {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: [...newCart] }
  }

  if (action.type === TOGGLE_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart
      .map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1
            if (newAmount > item.max) {
              newAmount = item.max
            }
            return { ...item, amount: newAmount }
          }
          if (value === 'dec') {
            let newAmount = item.amount - 1
            if (newAmount < 1) {
              newAmount = 0
            }
            return { ...item, amount: newAmount }
          }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
    return { ...state, cart: tempCart }
  }

  throw new Error(`No matching "${action.type}" -action type`)
}

export default cart_reducer
