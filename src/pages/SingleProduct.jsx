import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { PageHero } from '../components'
import { Loading, Error, ProductImages, Stars } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'

const SingleProduct = () => {
  const { id } = useParams()
  const {
    s_isLoading: loading,
    s_error: error,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])

  if (loading) {
    return <Loading></Loading>
  }

  if (error) {
    return <Error></Error>
  }

  const {
    name,
    images,
    price,
    description,
    stock,
    stars,
    reviews,
    shipping,
    company,
  } = singleProduct

  return (
    <>
      <PageHero title={name} product={true}></PageHero>
      <Wrapper className="section section-center page">
        <Link className="btn" to="/products">
          back to products
        </Link>

        <section className="main">
          <ProductImages images={images}></ProductImages>
          <article className="content">
            <div className="product-info">
              <h2>{name}</h2>
              <Stars {...{ stars, reviews }}></Stars>
              <h5 className="price">{formatPrice(price)}</h5>
              <p className="description">{description}</p>
              <p className="info">
                <span>Available :</span>{' '}
                {stock > 0 ? 'in stock' : 'out of stock'}
              </p>
              <p className="info">
                <span>SKU :</span> {id}
              </p>
              <p className="info">
                <span>Brand :</span> {company}
              </p>
              <hr />
              {stock > 0 && <div>Add to cart</div>}
            </div>
          </article>
        </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .main {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }

  .description {
    max-width: 45rem;
    line-height: 2rem;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .main {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct
