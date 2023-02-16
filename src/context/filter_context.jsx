import { createContext, useContext, useReducer, useEffect } from 'react'
import filter_reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRID,
  SET_LIST,
  SET_SORT,
  SORT_PRODUCTS,
} from '../actions'
import { useProductsContext } from './products_context'

const FilterContext = createContext()

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filter: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)

  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS })
  }, [state.sort, products])

  const setGrid = () => {
    dispatch({ type: SET_GRID })
  }

  const setList = () => {
    dispatch({ type: SET_LIST })
  }

  const setSort = (e) => {
    dispatch({ type: SET_SORT, payload: e.target.value })
  }

  return (
    <FilterContext.Provider value={{ ...state, setList, setGrid, setSort }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export { FilterProvider, useFilterContext }
