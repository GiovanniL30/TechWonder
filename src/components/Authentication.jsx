import React from 'react'
import { useShopContext } from '../context/ProductContext'
import { Navigate, Outlet } from 'react-router-dom'

export default function Authentication() {
  const { cartQuantity } = useShopContext()

  if (cartQuantity === 0) return <Navigate to='/' />

  return <Outlet />
}
