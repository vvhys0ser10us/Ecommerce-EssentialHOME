import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { PageHero } from '../components'
import { Loading, Error, ProductImages } from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

  const { name, images } = singleProduct

  return (
    <>
      <PageHero title={name} product={true}></PageHero>
      <Wrapper className="section section-center">
        <Link className="btn" to="/products">
          back to products
        </Link>

        <article>
          <ProductImages images={images}></ProductImages>

          <div className="product-info">info</div>
        </article>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``

export default SingleProduct
