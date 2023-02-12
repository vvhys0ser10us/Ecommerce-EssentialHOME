import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: grid;
  place-content: center;
  text-align: center;
  section {
    margin-bottom: 10rem;
  }
  h1 {
    font-size: 10rem;
  }
  h3 {
    margin-bottom: 3rem;
  }
`

export default Error
