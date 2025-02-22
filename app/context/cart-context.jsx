"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === medicine.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevCart, { ...medicine, quantity: 1 }]
    })
    toast.success("Added to cart!")
    setIsCartOpen(true)
  }

  const removeFromCart = (medicineId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== medicineId))
    toast.info("Removed from cart")
  }

  const updateQuantity = (medicineId, quantity) => {
    if (quantity < 1) return
    setCart((prevCart) => prevCart.map((item) => (item.id === medicineId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
    toast.info("Cart cleared")
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

