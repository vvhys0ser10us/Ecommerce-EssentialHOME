import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'

const productsReducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, showSidebar: true }
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, showSidebar: false }
  }

  return state
}

export default productsReducer
