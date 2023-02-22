import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import herobcg from '../assets/hero-bcg.svg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="hero-imgs">
        <img className="hero-1" src={herobcg} alt="hero" />
      </article>

      <article>
        <h1>
          find your
          <br /> home essentials
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <Link to="products" className="btn hero-btn">
          shop now
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  .hero-imgs {
    display: none;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .hero-imgs {
      display: block;
    }

    .hero-1 {
      width: 100%;
      height: 550px;
      border-radius: var(--radius);
      display: block;
    }
  }
`

export default Hero
