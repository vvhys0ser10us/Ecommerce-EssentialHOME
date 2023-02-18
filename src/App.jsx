import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
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
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="products" element={<Products />}></Route>
                    <Route
                      path="products/:id"
                      element={<SingleProduct />}
                    ></Route>
                    <Route path="checkout" element={<Checkout />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="*" element={<Error />}></Route>
                  </Route>
                </Routes>
              </Router>
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </div>
  )
}

export default App
