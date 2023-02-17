import { ADD_TO_CART, CLEAR_CART } from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    let temp = state.cart.find((item) => item.id === id + color)
    if (temp) {
      const newCart = state.cart.filter((item) => item.id !== temp.id)
      console.log(newCart)
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
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  throw new Error(`No matching "${action.type}" -action type`)
}

export default cart_reducer
