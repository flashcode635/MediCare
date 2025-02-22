import { Search, Upload, Clock, Truck } from "lucide-react"

const steps = [
  {
    title: "Search Medicines",
    description: "Find the medicines you need from our vast catalog",
    icon: Search,
  },
  {
    title: "Upload Prescription",
    description: "Share your prescription securely",
    icon: Upload,
  },
  {
    title: "Quick Processing",
    description: "We verify and process your order instantly",
    icon: Clock,
  },
  {
    title: "Fast Delivery",
    description: "Get medicines delivered to your doorstep",
    icon: Truck,
  },
]

export default function HowItWorks() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-500">Get your medicines delivered in 4 simple steps</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200" />
              )}
              <div className="relative flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-base text-gray-500 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

