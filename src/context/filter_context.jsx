import { createContext, useContext, useReducer, useEffect } from 'react'
import filter_reducer from '../reducers/filter_reducer'
import { LOAD_PRODUCTS, SET_GRID, SET_LIST } from '../actions'
import { useProductsContext } from './products_context'

const FilterContext = createContext()

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
}

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)

  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  const setGrid = () => {
    dispatch({ type: SET_GRID })
  }

  const setList = () => {
    dispatch({ type: SET_LIST })
  }

  return (
    <FilterContext.Provider value={{ ...state, setList, setGrid }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export { FilterProvider, useFilterContext }
