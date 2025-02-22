"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, User, Download, Share2 } from "lucide-react"
import Image from "next/image"

const statusColors = {
  ordered: "bg-gray-500",
  confirmed: "bg-blue-500",
  processing: "bg-yellow-500",
  shipped: "bg-purple-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
}

export default function OrderDetails({ order, isOpen, setIsOpen }) {
  if (!order) return null

  const getLatestStatus = () => {
    return order.tracking[order.tracking.length - 1]
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Order Details</DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Header */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Order #{order.id}</h2>
              <p className="text-sm text-muted-foreground">Placed on {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <Badge className={`${statusColors[order.status]} text-white self-start`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </Badge>
          </div>

          {/* Order Tracking */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Order Tracking</h3>
            <div className="relative">
              {order.tracking.map((track, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${statusColors[track.status]} z-10 relative`} />
                    {index !== order.tracking.length - 1 && (
                      <div className="absolute top-4 left-2 w-0.5 h-full -translate-x-1/2 bg-gray-200" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{track.message}</p>
                    <p className="text-sm text-muted-foreground">{new Date(track.date).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Order Items */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between">
                <span className="font-medium">Total Amount</span>
                <span className="font-bold text-primary">₹{order.total.toFixed(2)}</span>
              </div>
            </div>
          </Card>

          {/* Delivery Details */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Delivery Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium">{order.deliveryAddress.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p>{order.deliveryAddress.street}</p>
                  <p>
                    {order.deliveryAddress.city} - {order.deliveryAddress.pincode}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>{order.deliveryAddress.phone}</p>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="flex-1" variant="outline">
              Need Help?
            </Button>
            {order.status !== "delivered" && order.status !== "cancelled" && (
              <Button className="flex-1" variant="destructive">
                Cancel Order
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

