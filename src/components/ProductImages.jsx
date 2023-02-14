import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images }) => {
  const [value, setValue] = useState(0)
  console.log(images)

  return (
    <Wrapper className="section-center">
      <div className="image-container">
        <img
          className="big-image"
          src={images?.[value]?.url}
          alt="product image"
        />
      </div>
      <div className="thumbnails">
        {images?.map((image, index) => {
          return (
            <div
              className={index === value ? 'thumbnail selected' : 'thumbnail'}
              key={image.id}
              onClick={() => setValue(index)}
            >
              <img src={image.url} alt="product image" />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;

  .image-container {
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: var(--radius);
  }

  .big-image {
    height: 600px;
  }

  .thumbnails {
    display: grid;
    column-gap: 1rem;
    grid-template-columns: repeat(5, 1fr);
  }

  .thumbnail {
    border-radius: var(--radius);
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
