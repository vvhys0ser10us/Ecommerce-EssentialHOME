import {
  LOAD_PRODUCTS,
  SET_GRID,
  SET_LIST,
  SET_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  FILTER_PRODUCTS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price)
    maxPrice = Math.max(...maxPrice)

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filter: { ...state.filter, max_price: maxPrice, price: maxPrice },
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

  if (action.type === UPDATE_FILTER) {
    const { name, value } = action.payload

    return { ...state, filter: { ...state.filter, [name]: value } }
  }

  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      filter: {
        ...state.filter,
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        price: state.filter.max_price,
        shipping: false,
      },
    }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, category, company, color, price, shipping } = state.filter
    let products = [...all_products]

    if (text) {
      products = products.filter((product) =>
        product.name.toLowerCase().startsWith(text)
      )
    }

    if (category !== 'all') {
      products = products.filter((product) => product.category === category)
    }

    if (company !== 'all') {
      products = products.filter((product) => product.company === company)
    }

    if (color !== 'all') {
      products = products.filter((product) => {
        return product.colors.find((c) => c === color)
      })
    }

    products = products.filter((product) => product.price <= price)

    if (shipping) {
      products = products.filter((product) => product.shipping === true)
    }
    return { ...state, filtered_products: products }
  }
  throw new Error(`No matching "${action.type}" -action type`)
}

export default filter_reducer
