import React, { useState, createContext, useContext } from "react";
import data from "../data/data";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShopContext = createContext();

export function useShopContext() {
  return useContext(ShopContext);
}

export default function ProductContext({ children }) {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useLocalStorage("cart-item", []);
  const cartQuantity = cart.length;

  function removeCart(id) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id != id);
    });
  }

  function updateCartQuantity(id, quantity) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem.id === id) {
          if (cartItem.quantity == 1 && quantity == -1) {
            return cartItem;
          }

          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        return cartItem;
      });
    });
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        cartQuantity,
        removeCart,
        updateCartQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
