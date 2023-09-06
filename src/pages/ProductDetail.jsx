import React, { useEffect, useRef, useState } from 'react'
import {
  NavLink,
  Navigate,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useShopContext } from '../context/ProductContext'
import useWindowWidth from '../hooks/useWindowWidth'
import '../styles/productdetail.css'
import ProductCarousel from '../components/ProductCarousel'
import data from '../data/data'
import { formatCurrency } from '../utils/formatCurrency'
import Cart from './Cart'

export async function loader({ params }) {
  const products = data
  const currentProduct = products.find((item) => item.id === params.id)
  return { currentProduct }
}

export default function ProductDetail() {
  const { currentProduct } = useLoaderData()
  const windowWidth = useWindowWidth()
  const { cart, setCart } = useShopContext()

  const isWindow = windowWidth < 1000

  const [searchParams, setSearchParams] = useSearchParams()
  const [quantity, setQuantity] = useState(0)
  const price = quantity * currentProduct.price
  const variant = searchParams.get('variant')
  const imageURL = currentProduct.images[parseInt(variant) - 1]

  function addSearchParam(key, value) {
    const newParam = new URLSearchParams(searchParams)

    if (!value) newParam.delete(key)
    else newParam.set(key, value)

    setSearchParams(newParam)
  }

  const variantButtons = currentProduct.images.map((item, index) => {
    const isActive = index + 1 === parseInt(variant)

    return (
      <button
        key={index}
        onClick={() => {
          addSearchParam('image', imageURL)
          addSearchParam('variant', index + 1)
        }}
        name='quantity'
        value={index + 1}
        className={isActive ? 'active-variant-button' : ''}
      >
        {index + 1}
      </button>
    )
  })

  const sideImages = currentProduct.images.map((image, index) => {
    const isActive = image === imageURL

    return (
      <div
        key={image}
        onClick={() => addSearchParam('variant', index + 1)}
        className={`image-holder ${isActive ? 'active-side-image' : ''}`}
      >
        <img src={image} alt={image} />
      </div>
    )
  })

  function addToCart() {
    if (!variant) {
      alert('Please choose a variant')
      return
    }

    const newCartItem = {
      ...currentProduct,
      quantity: quantity,
      thumbnail: imageURL,
      variant: variant,
    }

    setCart((prevData) => {
      const updatedCart = prevData.map((cartItem) =>
        cartItem.id === newCartItem.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + newCartItem.quantity,
              variant: newCartItem.variant,
              thumbnail: newCartItem.thumbnail,
            }
          : cartItem
      )

      if (!updatedCart.some((cartItem) => cartItem.id === newCartItem.id)) {
        updatedCart.push(newCartItem)
      }

      return updatedCart
    })

    alert('Added to cart')
    setQuantity(0)
  }

  return (
    <>
      <div className='product-detail-wrapper'>
        <div className='container'>
          <div className='back-to-products'>
            <NavLink to='..'>&larr; Back to all products</NavLink>
          </div>
          <div className='product-detail-container'>
            {!isWindow && (
              <div className='current-product-images'>
                <div className='side-images-container'>{sideImages}</div>
                <div className='big-current-image'>
                  <img
                    src={imageURL ? imageURL : currentProduct.images[0]}
                    alt=''
                  />
                </div>
              </div>
            )}

            <div className='current-product-container'>
              <div className='layer'>Layers</div>
              <h1>{currentProduct.name}</h1>
              <p className='current-item-detail'>
                {currentProduct.description}
              </p>
              {isWindow && <ProductCarousel product={currentProduct} />}
              <div className='variant-container'>Variant: {variantButtons}</div>
              <div className='quantity-container'>
                <button
                  onClick={() =>
                    setQuantity((prev) => {
                      if (prev === 0) return 0
                      return prev - 1
                    })
                  }
                >
                  -
                </button>
                <div>{quantity}</div>
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              {quantity != 0 && (
                <button onClick={addToCart} className='add-to-cart-btn'>
                  Add to Cart $: {formatCurrency(price)}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
