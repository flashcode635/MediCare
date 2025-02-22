"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic
  }

  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Health, Delivered</span>
            <span className="block text-primary">Within Minutes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Order medicines online and get them delivered to your doorstep. Upload prescriptions, track orders, and set
            medicine reminders all in one place.
          </p>
          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="text"
                placeholder="Search for medicines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">30k+</p>
              <p className="mt-1 text-gray-500">Medicines Available</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">15min</p>
              <p className="mt-1 text-gray-500">Delivery Time</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="mt-1 text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

