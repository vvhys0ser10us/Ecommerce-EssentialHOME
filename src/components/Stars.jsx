import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import styled from 'styled-components'

const Stars = ({ stars, reviews }) => {
  return (
    <Wrapper>
      <div>
        {Array.from(Array(5), (_, index) => {
          const check = index + 0.5
          return (
            <span key={index}>
              {stars > check ? (
                <FaStar></FaStar>
              ) : stars > index ? (
                <FaStarHalfAlt />
              ) : (
                <FaRegStar />
              )}
            </span>
          )
        })}
      </div>

      <p> ({reviews} customer reviews)</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`

export default Stars
