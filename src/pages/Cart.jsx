import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import { PageHero, CartContent } from '../components'
import cartimg from '../assets/cart-img.svg'

const Cart = () => {
  const { cart } = useCartContext()

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>

          <Link to="/products" className="btn cart-btn">
            shop now
          </Link>
          <img className="cart-img" src={cartimg} alt="cart img" />
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent></CartContent>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  .cart-img {
    display: block;
    margin: 1rem auto;
    height: 500px;
    width: 90%;
  }

  .cart-btn {
    display: block;
    margin: 0 auto;
    width: 8rem;
  }

  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default Cart
