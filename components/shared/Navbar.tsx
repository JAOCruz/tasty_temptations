"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartButton } from "@/components/cart/CartButton"

const navLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Pedidos Personalizados", href: "#custom-orders" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#footer" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b-[3px] transition-colors duration-300 ${
        scrolled
          ? "border-brand-black bg-brand-cream"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex size-14 items-center justify-center rounded-full border-[3px] border-brand-black bg-brand-cream shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
            <Image
              src="/favicon.png"
              alt="Tasty Temptations"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <span className="font-heading text-xl font-bold uppercase tracking-tight text-black sm:text-2xl">
            Tasty Temptations
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-black transition-colors hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
          <CartButton />
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-3 md:hidden">
          <CartButton />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="noShadow" size="icon" className="bg-brand-purple text-black hover:text-brand-yellow">
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-2 border-border bg-brand-purple p-0 sm:max-w-sm">
              <div className="flex h-16 items-center justify-between border-b-2 border-brand-black px-4">
                <span className="font-heading text-xl text-black">Menú</span>
                <Button
                  variant="noShadow"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="bg-brand-purple text-black hover:text-brand-yellow"
                >
                  <X className="size-6" />
                </Button>
              </div>
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-base border-2 border-transparent px-4 py-3 font-heading text-lg text-black transition-colors hover:border-brand-black hover:text-brand-purple"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
