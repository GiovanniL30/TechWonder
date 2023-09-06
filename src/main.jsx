import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'
import AppLayout from './pages/layout/AppLayout.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './styles/global.css'
import ProductDetail, {
  loader as currentProductLoader,
} from './pages/ProductDetail.jsx'
import Authentication from './components/Authentication.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<App />} />
      <Route
        path='product-detail/:id'
        loader={currentProductLoader}
        element={<ProductDetail />}
      />
      <Route path='about' element={<About />} />
      <Route element={<Authentication />}>
        <Route path='cart' element={<Cart />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContext>
      <RouterProvider router={router} />
    </ProductContext>
  </React.StrictMode>
)
