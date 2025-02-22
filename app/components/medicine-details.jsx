"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/cart-context"
import { Clock, Package, Shield, ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function MedicineDetails({ medicine, isOpen, setIsOpen }) {
  const { addToCart } = useCart()

  if (!medicine) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Medicine Details</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <Image
              src={medicine.image || "/placeholder.svg"}
              alt={medicine.name}
              width={400}
              height={400}
              className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            {medicine.prescription && (
              <Badge className="absolute top-4 right-4 bg-yellow-500">Prescription Required</Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">{medicine.name}</h2>
              <p className="text-lg text-muted-foreground">{medicine.brand}</p>
              <div className="mt-2 flex items-center space-x-2">
                <Badge variant="outline">{medicine.category}</Badge>
                <Badge variant="secondary">In Stock</Badge>
              </div>
            </div>

            <div>
              <p className="text-3xl font-bold text-primary">₹{medicine.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-1">Inclusive of all taxes</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Express Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">100% Genuine</span>
              </div>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-muted-foreground">
                {medicine.description ||
                  `${medicine.name} is a high-quality medication manufactured by ${medicine.brand}. 
                  It is commonly used for treating various conditions and comes with a proven track record 
                  of effectiveness and safety.`}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Key Benefits</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                <li>Clinically proven effectiveness</li>
                <li>Minimal side effects</li>
                <li>Fast acting formula</li>
                <li>Easy to consume</li>
              </ul>
            </div>

            <Button
              className="w-full"
              onClick={() => {
                addToCart(medicine)
                setIsOpen(false)
              }}
            >
              Add to Cart - ₹{medicine.price.toFixed(2)}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

