import React from 'react'
import { useShopContext } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'
import '../styles/product.css'
import Footer from '../components/Footer'
import { formatCurrency } from '../utils/formatCurrency'

export default function Product() {
  const { products } = useShopContext()

  const productElements = products.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className='product-wrapper'>
          <NavLink className='link-product' to={`product-detail/${item.id}`}>
            <div className='images-holder'>
              <img
                className='product-display-image'
                src={item.images[0]}
                alt={item.name}
              />
              <img
                className='overlay-image'
                src={item.images[3]}
                alt={item.name}
              />
            </div>
          </NavLink>
          <div className='product-info'>
            <p className='product-name'>{item.name}</p>
            <p className='product-price'>${formatCurrency(item.price)}</p>
          </div>
        </div>
      </React.Fragment>
    )
  })

  return (
    <>
      <div className='products' id='shop'>
        <div className='container'>
          <h1 className='web-title'>
            <span>TechWonders</span>
            <span>Electronics</span>
          </h1>
          <p className='web-description'>
            TechWonders Electronics is your one-stop destination for
            cutting-edge gadgets and electronic marvels. Explore a world of
            innovation with our vast selection of the latest smartphones, smart
            home devices, gaming gear, and much more. We're dedicated to
            bringing you the future of technology today, with unbeatable prices
            and top-notch customer service. Discover the wonders of electronics
            at TechWonders, where the future meets the present.
          </p>

          <div className='products-grid'>{productElements}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
