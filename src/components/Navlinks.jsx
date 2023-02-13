import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = ({ closeSidebar }) => {
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
