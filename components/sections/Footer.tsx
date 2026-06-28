"use client"

import { Marquee } from "@/components/shared/Marquee"
import { Cake } from "lucide-react"

const footerLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#how-it-works" },
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "https://wa.me/18094567890" },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-brand-black pt-12">
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#"
            className="flex items-center gap-2 font-heading text-2xl tracking-tight text-white sm:text-3xl"
          >
            <Cake className="size-7 text-brand-pink" />
            Tasty Temptations
          </a>
          <p className="max-w-md text-sm text-brand-cream">
            Fresh baked desserts delivered with love in Santo Domingo, Dominican
            Republic.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading text-sm uppercase text-white transition-colors hover:text-brand-lime"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-brand-cream/70">
            © 2025 Tasty Temptations. Fresh baked in Santo Domingo, Dominican Republic.
          </p>
        </div>
      </div>

      <div className="border-t-2 border-brand-black bg-brand-black py-2">
        <Marquee className="border-none" speed={20}>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-lime">
            ORDER NOW
          </span>
          <span className="text-brand-pink">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-lime">
            SWEET TREATS
          </span>
          <span className="text-brand-pink">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-lime">
            SANTO DOMINGO
          </span>
          <span className="text-brand-pink">★</span>
        </Marquee>
      </div>
    </footer>
  )
}
