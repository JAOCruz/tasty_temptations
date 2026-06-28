import { Navbar } from "@/components/shared/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { FloatingCartButton } from "@/components/cart/FloatingCartButton"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCartButton />
    </>
  )
}
