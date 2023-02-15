import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images }) => {
  const [value, setValue] = useState(0)

  return (
    <Wrapper>
      <img
        className="big-image"
        src={images?.[value]?.url}
        alt="product image"
      />

      <div className="thumbnails">
        {images?.map((image, index) => {
          return (
            <img
              src={image.url}
              alt="product image"
              className={index === value ? 'thumbnail selected' : 'thumbnail'}
              key={image.id}
              onClick={() => setValue(index)}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--radius);
  }

  .big-image {
    height: 600px;
    margin-bottom: 1rem;
  }

  .thumbnails {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
  }

  .thumbnail {
    border-radius: var(--radius);
    cursor: pointer;
    height: 100px;
  }

  .selected {
    border: 2px solid var(--clr-primary-5);
  }

  @media (max-width: 576px) {
    .big-image {
      height: 300px;
    }

    .thumbnail {
      height: 50px;
    }
  }
  @media (min-width: 992px) {
    .big-image {
      height: 500px;
    }
    .thumbnail {
      height: 75px;
    }
  }
`

export default ProductImages
