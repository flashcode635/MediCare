import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-base text-gray-500 hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/delivery" className="text-base text-gray-500 hover:text-gray-900">
                  Medicine Delivery
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-base text-gray-500 hover:text-gray-900">
                  Healthcare Products
                </Link>
              </li>
              <li>
                <Link href="/prescriptions" className="text-base text-gray-500 hover:text-gray-900">
                  Upload Prescription
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-base text-gray-500 hover:text-gray-900">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-4 text-base text-gray-500">Get the latest updates and offers.</p>
            <form className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-primary focus:border-primary"
              />
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} MediQuick. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

