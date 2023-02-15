import React from 'react'
import { FaThLarge, FaThList } from 'react-icons/fa'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const Sort = () => {
  const { setGrid, setList, grid_view } = useFilterContext()

  return (
    <Wrapper>
      <div className="btn-container">
        <button className={grid_view ? 'active' : ''} onClick={setGrid}>
          <FaThLarge />
        </button>
        <button className={grid_view ? '' : 'active'} onClick={setList}>
          <FaThList />
        </button>
      </div>

      <p>22 products found</p>
      <hr />
      <form>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name_a-z">name (a - z)</option>
          <option value="name_z-a">name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  .btn-container {
    display: flex;
    column-gap: 0.5rem;
  }

  button {
    border: 1px solid black;
    width: 1.5rem;
    border-radius: var(--radius);
    height: 1.5rem;
    background: transparent;
    display: grid;
    place-items: center;
    cursor: pointer;
    svg {
      font-size: 1rem;
    }
  }

  .active {
    background: var(--clr-black);
    color: var(--clr-white);
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
