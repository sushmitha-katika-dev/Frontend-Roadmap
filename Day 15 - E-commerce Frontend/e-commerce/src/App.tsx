import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import RootLayout from './layout'
import HomePage from './pages/home'
import NotFound from './pages/not-found'
import LoginPage from './pages/login'
import AddProductPage from './pages/add-product'
import CounterPage from './pages/counter'
import Products from './pages/products'
import Product from './pages/product'
import CartPage from './pages/cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/add-product' element={<AddProductPage />} />



          <Route path='/login' element={<LoginPage />} />
          <Route path='counter' element={<CounterPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
