import { createContext, useContext, useReducer, useEffect } from 'react'
import productsReducer from '../reducers/products_reducer'
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
import { products_url, single_product_url } from '../utils/constants'
import axios from 'axios'

const ProductsContext = createContext()

const initialState = {
  showSidebar: false,
  isLoading: false,
  error: false,
  products: [],
  feat_products: [],
  singleProduct: {},
  s_isLodaing: false,
  s_error: false,
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

  const fetchSingleProduct = async (id) => {
    dispatch({ type: FETCH_SPRODUCT_BEGIN })
    try {
      const response = await axios(`${single_product_url}${id}`)
      const data = await response.data
      console.log(data)
      dispatch({ type: FETCH_SPRODUCT_FINISH, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_SPRODUCT_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(products_url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductsContext = () => {
  return useContext(ProductsContext)
}

export { useProductsContext, ProductsProvider }
