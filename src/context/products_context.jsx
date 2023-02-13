import { createContext, useContext, useReducer } from 'react'
import productsReducer from '../reducers/products_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'

const ProductsContext = createContext()

const initialState = {
  showSidebar: false,
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => {
  return useContext(ProductsContext)
}

export { useProductsContext, ProductsProvider }
