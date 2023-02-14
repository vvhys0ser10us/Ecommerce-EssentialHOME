import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FINISH,
  FETCH_PRODUCTS_ERROR,
} from '../actions'

const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, showSidebar: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, showSidebar: false }
  }
  if (action.type === FETCH_PRODUCTS_BEGIN) {
    return { ...state, isLoading: true, error: false }
  }
  if (action.type === FETCH_PRODUCTS_ERROR) {
    return { ...state, error: true, isLoading: false }
  }
  if (action.type === FETCH_PRODUCTS_FINISH) {
    const feat_products = action.payload.filter(
      (product) => product?.featured === true
    )
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      feat_products,
    }
  }

  throw new Error(`No matching "${action.type}" -action type`)
}

export default productsReducer
