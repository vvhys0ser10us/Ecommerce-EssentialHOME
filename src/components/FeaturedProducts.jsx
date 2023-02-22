import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import Product from './Product'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { error, isLoading, feat_products } = useProductsContext()

  if (isLoading) {
    return (
      <Wrapper className="section">
        <div className="section-center">
          <div className="title">
            <h2>featured products</h2>
            <div className="underline"></div>
          </div>

          <div className="loading"></div>
        </div>
      </Wrapper>
    )
  }

  if (error) {
    return (
      <Wrapper className="section">
        <div className="section-center">
          <div className="title">
            <h2>featured products</h2>
            <div className="underline"></div>
          </div>

          <h1 className="error">Error Fetching Products</h1>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        <div className="products">
          {feat_products.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product}></Product>
          })}
        </div>

        <Link to="products" className="btn">
          all products
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);

  .error {
    text-align: center;
    margin: 5rem 0;
  }

  .loading {
    margin-bottom: 5rem;
  }

  .products {
    display: grid;
    row-gap: 1rem;
    margin: 4rem auto;
  }

  .btn {
    display: block;
    margin: 0 auto;
    width: 10rem;
    text-align: center;
  }

  @media (min-width: 576px) {
    .products {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }
`

export default FeaturedProducts
