import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import styled from 'styled-components'
import { PageHero } from '../components'
import { StripeCheckout } from '../components'

const Checkout = () => {
  const { cart } = useCartContext()

  return (
    <main>
      <PageHero title="checkout"></PageHero>
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              shop now
            </Link>
          </div>
        ) : (
          <StripeCheckout></StripeCheckout>
        )}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  .empty {
    text-align: center;
  }
`

export default Checkout
