import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Product = ({ image, price, name, id }) => {
  return (
    <Wrapper>
      <Link to={`products/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} />
          <span className="search-icon">
            <FaSearch />
          </span>
        </div>
      </Link>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{formatPrice(price)}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .img-container {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    position: relative;
    background: var(--clr-black);
  }

  .img-container:hover img {
    opacity: 0.5;
  }

  .img-container:hover .search-icon {
    opacity: 1;
  }

  img {
    height: 225px;
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .product-info {
    display: flex;
    justify-content: space-between;
    letter-spacing: var(--spacing);
    align-items: center;
  }

  .product-name {
    text-transform: capitalize;
  }

  .product-price {
    color: var(--clr-primary-5);
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: grid;
    place-items: center;

    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1rem;
      color: var(--clr-white);
    }
  }
`

export default Product
