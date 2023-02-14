import { createContext, useContext, useReducer, useEffect } from 'react'
import productsReducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_FINISH,
  FETCH_PRODUCTS_ERROR,
} from '../actions'
import { products_url } from '../utils/constants'
import axios from 'axios'

const ProductsContext = createContext()

const initialState = {
  showSidebar: false,
  isLoading: false,
  error: false,
  products: [],
  feat_products: [],
}

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const fetchProducts = async (url) => {
    dispatch({ type: FETCH_PRODUCTS_BEGIN })
    try {
      const response = await axios(url)
      const data = await response.data
      console.log(data)
      dispatch({ type: FETCH_PRODUCTS_FINISH, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_PRODUCTS_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(products_url)
  }, [])

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
