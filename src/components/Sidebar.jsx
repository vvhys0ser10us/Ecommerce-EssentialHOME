import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaTimes } from 'react-icons/fa'
import Navlinks from './Navlinks'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'

const Sidebar = () => {
  const { showSidebar, closeSidebar } = useProductsContext()

  return (
    <SidebarWrapper>
      <aside className={showSidebar ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <img className="logo" src={logo} alt="logo" />
          <button className="close-btn" onClick={() => closeSidebar()}>
            <FaTimes />
          </button>
        </div>

        <Navlinks closeSidebar={closeSidebar} />
        <CartButtons />
      </aside>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .logo {
    width: 175px;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
    &:hover {
      color: var(--clr-red-light);
    }
  }

  .nav-links {
    text-align: center;
    margin: 1rem auto;
    li {
      padding: 1rem;
      transition: var(--transition);
      &:hover {
        background: var(--clr-grey-9);
        transform: scale(1.1);
      }
    }
  }

  .nav-link {
    display: block;
    color: var(--clr-grey-4);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-size: 1.25rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transform: translate(-100%);
    z-index: -1;
    transition: var(--transition);
  }

  .cart-btns {
    margin: 5rem auto;
  }

  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }

  @media (min-width: 800px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
