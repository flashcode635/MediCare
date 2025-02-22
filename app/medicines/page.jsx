"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Filter, Search } from "lucide-react"
import Image from "next/image"
import { useCart } from "../context/cart-context"
import MedicineDetails from "../components/medicine-details"
import { motion } from "framer-motion"

const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    brand: "Dolo",
    price: 30.5,
    category: "Pain Relief",
    prescription: false,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Paracetamol is used to treat mild to moderate pain and fever. It's gentle on the stomach and safe for most people when used as directed.",
  },
  // Add more medicines
]

export default function MedicinesPage() {
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMedicine, setSelectedMedicine] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const filteredMedicines = medicines.filter(
    (medicine) =>
      medicine.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "all" || medicine.category === selectedCategory),
  )

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine)
    setIsDetailsOpen(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search medicines..."
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="all">All Categories</option>
            <option value="Pain Relief">Pain Relief</option>
            <option value="Antibiotics">Antibiotics</option>
            <option value="First Aid">First Aid</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMedicines.map((medicine, index) => (
          <motion.div
            key={medicine.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="cursor-pointer" onClick={() => handleMedicineClick(medicine)}>
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={medicine.image || "/placeholder.svg"}
                      alt={medicine.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {medicine.prescription && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                        Prescription Required
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mt-4 group-hover:text-primary transition-colors">
                    {medicine.name}
                  </h3>
                  <p className="text-gray-500">{medicine.brand}</p>
                  <p className="text-primary font-bold mt-2">₹{medicine.price.toFixed(2)}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full group-hover:bg-primary/90 transition-colors"
                  onClick={() => addToCart(medicine)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <MedicineDetails medicine={selectedMedicine} isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
    </div>
  )
}

