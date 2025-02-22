import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { CartProvider } from "./context/cart-context"
import CartDrawer from "./components/cart-drawer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MediQuick - Fast Medicine Delivery",
  description: "Get medicines delivered to your doorstep within minutes",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <CartDrawer />
          <Toaster position="top-center" />
        </CartProvider>
      </body>
    </html>
  )
}

