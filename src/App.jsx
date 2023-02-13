import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/products_context'
import {
  SharedLayout,
  About,
  Cart,
  Checkout,
  Home,
  Products,
  SingleProduct,
  Error,
} from './pages'

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="products" element={<Products />}></Route>
              <Route path="products/:id" element={<SingleProduct />}></Route>
              <Route path="checkout" element={<Checkout />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Route>
          </Routes>
        </Router>
      </ProductsProvider>
    </div>
  )
}

export default App
