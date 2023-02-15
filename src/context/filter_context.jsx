import { createContext, useContext, useReducer } from 'react'
import filter_reducer from '../reducers/filter_reducer'

const FilterContext = createContext()

const initialState = {
  all_products: [],
  filtered_products: [],
}

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export { FilterProvider, useFilterContext }
