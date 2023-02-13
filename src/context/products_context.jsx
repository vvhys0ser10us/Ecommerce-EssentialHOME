import { createContext, useContext, useReducer } from 'react'
import productsReducer from '../reducers/products_reducer'

const ProductsContext = createContext()

const initialState = {}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  return (
    <ProductsContext.Provider value="hello world">
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => {
  return useContext(ProductsContext)
}

export { useProductsContext, ProductsProvider }
