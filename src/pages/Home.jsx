import React from 'react'
import { FeaturedProducts, Services, Contact, Hero } from '../components'

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
