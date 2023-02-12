import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link className="nav-link" to="/">
          home
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="about">
          about
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="products">
          products
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks
