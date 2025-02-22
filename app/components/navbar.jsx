"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">MediQuick</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/medicines" className="text-gray-700 hover:text-primary">
              Medicines
            </Link>
            <Link href="/upload-prescription" className="text-gray-700 hover:text-primary">
              Upload Prescription
            </Link>
            <Link href="/orders" className="text-gray-700 hover:text-primary">
              Orders
            </Link>
            <Link href="/reminders" className="text-gray-700 hover:text-primary">
              Reminders
            </Link>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button>Login</Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/medicines" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Medicines
              </Link>
              <Link href="/upload-prescription" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Upload Prescription
              </Link>
              <Link href="/orders" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Orders
              </Link>
              <Link href="/reminders" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Reminders
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button>Login</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

