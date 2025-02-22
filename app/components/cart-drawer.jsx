"use client"

import { useCart } from "../context/cart-context"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { handlePayment } from "../razorpay/payment"

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleCheckout = async () => {
    try {
      await handlePayment(getCartTotal())
    } catch (error) {
      console.error("Payment failed:", error)
    }
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({cart.length} items)</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <Image src="/placeholder.svg" alt="Empty Cart" width={200} height={200} className="mb-4 opacity-50" />
            <p className="text-lg font-medium text-gray-500">Your cart is empty</p>
            <Button variant="outline" className="mt-4" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[65vh] mt-8">
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-accent/50 rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.brand}</p>
                      <p className="font-semibold text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
              <div className="flex justify-between mb-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                <Button className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

