import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    </div>
  )
}

export default App
