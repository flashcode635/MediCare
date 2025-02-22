import { Tablets, Thermometer, AmbulanceIcon as FirstAid, Syringe, Pill, Stethoscope } from "lucide-react"

const categories = [
  {
    name: "Prescription Drugs",
    icon: Tablets,
    description: "Order prescription medicines",
  },
  {
    name: "Health Devices",
    icon: Thermometer,
    description: "BP monitors, glucometers & more",
  },
  {
    name: "First Aid",
    icon: FirstAid,
    description: "Essential first aid supplies",
  },
  {
    name: "Vaccines",
    icon: Syringe,
    description: "Vaccination services",
  },
  {
    name: "Supplements",
    icon: Pill,
    description: "Vitamins & supplements",
  },
  {
    name: "Health Check",
    icon: Stethoscope,
    description: "Book health checkups",
  },
]

export default function Categories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

