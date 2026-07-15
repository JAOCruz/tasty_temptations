"use client"

import Image from "next/image"
import { Marquee } from "@/components/shared/Marquee"

const footerLinks = [
  { label: "Menú", href: "#menu" },
  { label: "Cómo funciona", href: "#how-it-works" },
  { label: "Instagram", href: "https://www.instagram.com/tastytempt_rd/?hl=en" },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-pop-dots-green pt-16">
      <div className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-base border-[3px] border-border bg-white p-8 text-center shadow-[6px_6px_0_#222222] sm:p-12">
          <a
            href="#"
            className="block"
          >
            <Image
              src="/logo-horizontal.png"
              alt="Tasty Temptations"
              width={400}
              height={99}
              className="h-auto w-full max-w-[280px] sm:max-w-[340px]"
            />
          </a>
          <p className="max-w-md text-base text-brand-black">
            Tentaciones recién horneadas, con delivery y Pick Up en Santo Domingo 💚
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 rounded-base border-[3px] border-border bg-white px-4 py-2 font-heading text-sm uppercase text-brand-black shadow-[4px_4px_0_#222222] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand-purple hover:text-white hover:shadow-[6px_6px_0_#222222]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-brand-black/70">
            © 2025 Tasty Temptations • Santo Domingo, República Dominicana.
          </p>
        </div>
      </div>

      <div className="border-t-2 border-brand-black bg-brand-black py-2.5">
        <Marquee className="border-none" speed={20}>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-green">
            PIDE AHORA
          </span>
          <span className="text-brand-purple">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-green">
            DULCES
          </span>
          <span className="text-brand-purple">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-green">
            SANTO DOMINGO
          </span>
          <span className="text-brand-purple">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-brand-green">
            FRESCO DIARIO
          </span>
          <span className="text-brand-purple">★</span>
        </Marquee>
      </div>
    </footer>
  )
}
