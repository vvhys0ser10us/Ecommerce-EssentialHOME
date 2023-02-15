import {
  LOAD_PRODUCTS,
  SET_GRID,
  SET_LIST,
  SET_SORT,
  SORT_PRODUCTS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }

  if (action.type === SET_GRID) {
    return { ...state, grid_view: true }
  }

  if (action.type === SET_LIST) {
    return { ...state, grid_view: false }
  }

  if (action.type === SET_SORT) {
    return {
      ...state,
      sort: action.payload,
    }
  }

  if (action.type === SORT_PRODUCTS) {
    if (state.sort === 'price-lowest') {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) => a.price - b.price),
        ],
      }
    }

    if (state.sort === 'price-highest') {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) => b.price - a.price),
        ],
      }
    }

    if (state.sort === 'name_a-z') {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        ],
      }
    }

    if (state.sort === 'name_z-a') {
      return {
        ...state,
        filtered_products: [
          ...state.filtered_products.sort((a, b) =>
            b.name.localeCompare(a.name)
          ),
        ],
      }
    }
  }

  throw new Error(`No matching "${action.type}" -action type`)
}

export default filter_reducer
