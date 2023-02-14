import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FINISH,
  FETCH_PRODUCTS_ERROR,
  FETCH_SPRODUCT_BEGIN,
  FETCH_SPRODUCT_ERROR,
  FETCH_SPRODUCT_FINISH,
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
  if (action.type === FETCH_SPRODUCT_BEGIN) {
    return { ...state, s_isLoading: true, s_error: false }
  }
  if (action.type === FETCH_SPRODUCT_ERROR) {
    return { ...state, s_error: true, s_isLoading: false }
  }
  if (action.type === FETCH_SPRODUCT_FINISH) {
    return { ...state, s_isLoading: false, singleProduct: action.payload }
  }

  throw new Error(`No matching "${action.type}" -action type`)
}

export default productsReducer
