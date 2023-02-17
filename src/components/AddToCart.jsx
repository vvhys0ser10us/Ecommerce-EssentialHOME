import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AmountButtons from './AmountButtons'
import { useCartContext } from '../context/cart_context'

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product
  const [value, setValue] = useState(0)
  const [amount, setAmount] = useState(1)

  const { addToCart } = useCartContext()

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className="container">
        <span>Colors :</span>
        <div className="colors">
          {colors.map((color, index) => {
            return (
              <ColorButton
                className={index === value ? 'selected' : ''}
                key={index}
                buttonColor={color}
                onClick={() => setValue(index)}
              >
                {index === value ? <FaCheck /> : null}
              </ColorButton>
            )
          })}
        </div>
      </div>

      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />

        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, colors[value], amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
  .container {
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
  }

  span {
    font-weight: 700;
  }

  .selected {
    opacity: 1;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

const ColorButton = styled.button`
  margin-right: 0.5rem;
  color: ${(props) => props.buttonColor};
  background-color: ${(props) => props.buttonColor};
  width: 1.5rem;
  height: 1.5rem;
  border: transparent;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.5;
  display: grid;
  place-items: center;
  svg {
    color: var(--clr-white);
    font-size: 0.75rem;
  }
`

export default AddToCart
