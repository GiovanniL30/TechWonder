import React from 'react'
import { useShopContext } from '../context/ProductContext'
import { formatCurrency } from '../utils/formatCurrency'
import '../styles/cart.css'
import { NavLink } from 'react-router-dom'

export default function Cart() {
  const { cart, removeCart, updateCartQuantity } = useShopContext()
  let totalCost = 0

  const cartElements = cart.map((item) => {
    const cost = item.price * item.quantity
    totalCost += cost
    return (
      <>
        <div className='cart-item-container'>
          <div className='cart-img'>
            <img src={item.thumbnail} alt='' />
          </div>

          <div className='wrapper-cart'>
            <div className='cart-item-info'>
              {item.name} - Variant({item.variant})
            </div>
            <div className='cart-update-quantity'>
              <button onClick={() => updateCartQuantity(item.id, -1)}>-</button>
              <div>{item.quantity}</div>
              <button onClick={() => updateCartQuantity(item.id, 1)}>+</button>
            </div>
          </div>

          <div className='total-price'>$ {formatCurrency(cost)}</div>
          <button
            onClick={() => removeCart(item.id)}
            className='remove-cart-item-btn'
          >
            &#9587;
          </button>
        </div>
        <hr />
      </>
    )
  })

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='cart-page-container'>
          <div className='total-cart-info'>
            <NavLink to='..' style={{ textDecoration: 'underline' }}>
              -Back
            </NavLink>
            <h1>Shopping Cart</h1>

            <div>
              <p>Total Cost</p>
              <h2>${formatCurrency(totalCost)}</h2>
            </div>
          </div>
          <div className='cart-grid'>{cartElements}</div>
        </div>
      </div>
    </div>
  )
}
