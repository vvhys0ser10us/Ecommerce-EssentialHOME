import React from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const Navlinks = () => {
  const { closeSidebar } = useProductsContext()

  return (
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/" onClick={closeSidebar}>
          home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="about" onClick={closeSidebar}>
          about
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="products" onClick={closeSidebar}>
          products
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks
