import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <p>
        &copy; {year} <span>E-commerce</span> all rights reserved
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: var(--clr-black);
  display: grid;
  place-items: center;
  p {
    color: var(--clr-white);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    margin: 2rem auto;
  }
  span {
    color: var(--clr-primary-5);
  }
`

export default Footer
