import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    all_products,
    filter: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              value={text}
              placeholder="Search"
              className="search-input"
            />
          </div>

          <div className="form-control">
            <h5>Category</h5>
            {categories.map((item, index) => {
              return (
                <button
                  key={index}
                  name="category"
                  className={
                    category === item.toLowerCase()
                      ? 'active category-btn'
                      : 'category-btn'
                  }
                >
                  {item}
                </button>
              )
            })}
          </div>

          <div className="form-control">
            <h5>Company</h5>
            <select name="company" value={company} className="company">
              {companies.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>

          <div className="form-control">
            <h5>Color</h5>
            <div className="colors">
              {colors.map((item, index) => {
                console.log(item)
                if (item === 'all') {
                  return (
                    <button
                      key={index}
                      name="color"
                      className={
                        color === 'all'
                          ? 'category-btn all-btn active'
                          : 'all-btn category-btn'
                      }
                    >
                      all
                    </button>
                  )
                }
                return (
                  <ColorButton
                    key={index}
                    buttonColor={item}
                    className={color === item ? 'active' : ''}
                  >
                    {color === item && <FaCheck></FaCheck>}
                  </ColorButton>
                )
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>

          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
            />
          </div>
        </form>
        <button className="clear-btn">clear filters</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  .category-btn {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  .colors {
    display: flex;
    align-items: center;
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }

  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    border: transparent;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

const ColorButton = styled.button`
  margin-right: 0.5rem;
  color: ${(props) => props.buttonColor};
  background-color: ${(props) => props.buttonColor};
  width: 1rem;
  height: 1rem;
  border: transparent;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.5;
  display: grid;
  place-items: center;
  svg {
    color: var(--clr-white);
    font-size: 0.5rem;
  }
`

export default Filters
