import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Amazing service! Got my medicines delivered within 15 minutes. Will definitely use again.",
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The medicine reminder feature is a lifesaver. Never missed my doses since I started using it.",
  },
  {
    name: "Priya Patel",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Very reliable service. The prescription upload feature makes ordering medicines so convenient.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-500">Trusted by thousands of customers across the country</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

