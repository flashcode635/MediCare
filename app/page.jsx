import Hero from "./components/hero"
import Categories from "./components/categories"
import FeaturedMedicines from "./components/featured-medicines"
import HowItWorks from "./components/how-it-works"
import Testimonials from "./components/testimonials"
import ErrorBoundary from "./components/error-boundary"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ErrorBoundary>
        <Hero />
        <Categories />
        <FeaturedMedicines />
        <HowItWorks />
        <Testimonials />
      </ErrorBoundary>
    </main>
  )
}

