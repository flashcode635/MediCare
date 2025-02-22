"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ChevronRight } from "lucide-react"
import OrderDetails from "./order-details"
import { motion } from "framer-motion"

// Sample order data - in a real app, this would come from an API
const orders = [
  {
    id: "ORD001",
    date: "2024-02-20",
    total: 280.75,
    status: "delivered",
    items: [
      {
        id: 1,
        name: "Paracetamol",
        quantity: 2,
        price: 30.5,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: 2,
        name: "Azithromycin",
        quantity: 1,
        price: 150.0,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: [
      { status: "ordered", date: "2024-02-20T10:00:00", message: "Order placed" },
      { status: "confirmed", date: "2024-02-20T10:05:00", message: "Order confirmed" },
      { status: "processing", date: "2024-02-20T10:30:00", message: "Preparing your order" },
      { status: "shipped", date: "2024-02-20T11:00:00", message: "Out for delivery" },
      { status: "delivered", date: "2024-02-20T14:00:00", message: "Delivered successfully" },
    ],
    deliveryAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Mumbai",
      pincode: "400001",
      phone: "+91 9876543210",
    },
  },
  {
    id: "ORD002",
    date: "2024-02-19",
    total: 235.25,
    status: "processing",
    items: [
      {
        id: 3,
        name: "Cetirizine",
        quantity: 1,
        price: 85.25,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    tracking: [
      { status: "ordered", date: "2024-02-19T15:00:00", message: "Order placed" },
      { status: "confirmed", date: "2024-02-19T15:05:00", message: "Order confirmed" },
      { status: "processing", date: "2024-02-19T15:30:00", message: "Preparing your order" },
    ],
    deliveryAddress: {
      name: "John Doe",
      street: "123 Main St",
      city: "Mumbai",
      pincode: "400001",
      phone: "+91 9876543210",
    },
  },
]

const statusColors = {
  ordered: "bg-gray-500",
  confirmed: "bg-blue-500",
  processing: "bg-yellow-500",
  shipped: "bg-purple-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
}

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const filteredOrders = orders.filter(
    (order) =>
      (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (statusFilter === "all" || order.status === statusFilter),
  )

  const handleOrderClick = (order) => {
    setSelectedOrder(order)
    setIsDetailsOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <Badge variant="outline" className="text-lg">
          {orders.length} Orders
        </Badge>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="all">All Status</option>
            <option value="ordered">Ordered</option>
            <option value="confirmed">Confirmed</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleOrderClick(order)}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">Order #{order.id}</h3>
                    <Badge className={`${statusColors[order.status]} text-white`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ordered on {new Date(order.date).toLocaleDateString()}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{order.items.length} items</span>•
                    <span className="font-semibold text-primary">₹{order.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {order.items.slice(0, 3).map((item, i) => (
                      <div
                        key={item.id}
                        className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                      >
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="relative w-12 h-12 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">+{order.items.length - 3}</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight className="h-6 w-6 text-muted-foreground" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <OrderDetails order={selectedOrder} isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
    </div>
  )
}

