import { Navbar } from "@/components/shared/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Menu } from "@/components/sections/Menu"
import { CustomOrders } from "@/components/sections/CustomOrders"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
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
        <CustomOrders />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCartButton />
    </>
  )
}
