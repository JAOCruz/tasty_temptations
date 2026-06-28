"use client"

import { useState } from "react"
import { Menu, X, Cake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CartButton } from "@/components/cart/CartButton"

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#how-it-works" },
  { label: "Contact", href: "#footer" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b-[3px] border-brand-lime bg-brand-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="flex items-center gap-2 font-heading text-xl tracking-tight text-white sm:text-2xl"
        >
          <Cake className="size-6 text-brand-pink" />
          <span>Tasty Temptations</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-white transition-colors hover:text-brand-lime"
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
              <Button variant="noShadow" size="icon" className="bg-brand-black text-white hover:text-brand-lime">
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-2 border-border bg-brand-black p-0 sm:max-w-sm">
              <div className="flex h-16 items-center justify-between border-b-2 border-brand-lime px-4">
                <span className="font-heading text-xl text-white">Menu</span>
                <Button
                  variant="noShadow"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="bg-brand-black text-white hover:text-brand-lime"
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
                    className="rounded-base border-2 border-transparent px-4 py-3 font-heading text-lg text-white transition-colors hover:border-brand-lime hover:text-brand-lime"
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
