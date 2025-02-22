"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "../context/cart-context"
import MedicineDetails from "./medicine-details"
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
  {
    id: 2,
    name: "Azithromycin",
    brand: "Zithromax",
    price: 150.0,
    category: "Antibiotics",
    prescription: true,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Azithromycin is an antibiotic used to treat various bacterial infections. It works by stopping the growth of bacteria.",
  },
  {
    id: 3,
    name: "Cetirizine",
    brand: "Zyrtec",
    price: 85.25,
    category: "Allergy",
    prescription: false,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Cetirizine is an antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.",
  },
  // Add more medicines as needed
]

export default function FeaturedMedicines() {
  const { addToCart } = useCart()
  const [selectedMedicine, setSelectedMedicine] = useState(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine)
    setIsDetailsOpen(true)
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Medicines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {medicines.map((medicine, index) => (
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
      </div>

      <MedicineDetails medicine={selectedMedicine} isOpen={isDetailsOpen} setIsOpen={setIsDetailsOpen} />
    </section>
  )
}

