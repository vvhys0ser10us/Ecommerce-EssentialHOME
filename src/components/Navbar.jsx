import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

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

        <CartButton className="nav-btns"></CartButton>

        <button className="sidebar-btn">
          <FaBars></FaBars>
        </button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 95vw;
    margin: 0 auto;
    max-width: 1170px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    display: none;
  }

  .nav-btns {
    display: none;
  }

  .sidebar-btn {
    border: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    transition: var(--transition);
  }

  .sidebar-btn:hover {
    transform: scale(1.2);
  }

  .logo {
    width: 175px;
  }

  @media (min-width: 800px) {
    .sidebar-btn {
      display: none;
    }

    .nav-btns {
      display: grid;
    }

    .nav-links {
      display: flex;
      column-gap: 1em;
      .nav-link {
        color: var(--clr-grey-1);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5em;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-5);
        }
      }
    }
  }
`

export default Navbar
