"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/shared/Marquee"
import { HeroBgShift, HeroBgMesh, HeroBgAurora } from "@/components/shared/HeroBackgrounds"
import {
  ArrowRight,
  MapPin,
  CakeSlice,
} from "lucide-react"

const heroDesserts = [
  {
    src: "/illustrations/hero-pop/rolls.png",
    alt: "Cinnamon rolls pop-art",
    className: "absolute -left-2 bottom-0 z-10 w-24 -rotate-12 sm:w-28 md:-left-6 md:w-36",
  },
  {
    src: "/favicon.png",
    alt: "Cheesecake pop-art",
    className: "absolute left-1/2 top-1/2 z-20 w-48 -translate-x-1/2 -translate-y-1/2 sm:w-60 md:w-72 lg:w-80",
  },
  {
    src: "/illustrations/hero-pop/brownies.png",
    alt: "Brownies pop-art",
    className: "absolute -right-2 bottom-2 z-10 w-24 rotate-12 sm:w-28 md:-right-6 md:w-36",
  },
]

const bottomTags = [
  { label: "Cheesecakes", icon: "/favicon.png", targetId: "menu-item-1" },
  { label: "Brownies", icon: "/illustrations/hero-pop/brownies.png", targetId: "menu-item-3" },
  { label: "Cinnamon Rolls", icon: "/illustrations/hero-pop/rolls.png", targetId: "menu-item-6" },
  { label: "Carrot Cake", icon: "/illustrations/hero-pop/carrot-cake.png", targetId: "menu-item-9" },
]

const scrollToMenuItem = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" })
}

export type HeroBgVariant = "current" | "shift" | "mesh" | "aurora"

export function Hero({ bgVariant = "current" }: { bgVariant?: HeroBgVariant }) {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-brand-cream pt-16">
      {/* Background */}
      {bgVariant === "shift" ? (
        <HeroBgShift />
      ) : bgVariant === "mesh" ? (
        <HeroBgMesh />
      ) : bgVariant === "aurora" ? (
        <HeroBgAurora />
      ) : (
        <div className="absolute inset-0 bg-linear-to-r/oklch from-brand-green via-red-400 to-brand-cream-2 grid grid-cols-1 md:grid-cols-[55%_45%]">
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-1 flex-col px-4 py-6 sm:px-8 lg:px-12">
        {/* Top row */}
        <div className="grid flex-1 grid-cols-1 items-end gap-6 md:grid-cols-[55%_45%] md:gap-8">
          {/* Top left - Title */}
          <div className="flex flex-col items-center gap-4 pb-4 text-center md:items-start md:pb-8 md:text-left">
            <h1 className="w-full px-2 text-center font-heading text-[11vw] font-bold uppercase leading-[0.85] tracking-tight text-brand-black break-words sm:px-0 sm:text-5xl md:text-left md:text-6xl lg:text-7xl xl:text-8xl">
              TASTY
              <br />
              TEMPTATIONS
            </h1>
            <div className="rounded-full border-[3px] border-border bg-brand-yellow px-6 py-2 shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
              <span className="font-heading text-xs uppercase tracking-wider text-brand-black sm:text-sm">
                Tentación horneada fresca. Nada de stock, todo hecho para ti.
              </span>
            </div>
            <span className="pop-art-sticker pop-art-sticker-purple -rotate-6">
              ¡Hecho en SDQ!
            </span>
          </div>

          {/* Top right - value prop */}
          <div className="relative hidden h-full flex-col items-end justify-end pb-60 pr-30 md:flex md:pb-8">
            <div className="max-w-[300px] rotate-2 rounded-[1.25rem] border-[3px] border-border bg-white p-4 shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
              <p className="font-heading text-m">
                Pide con 48 horas de antelación, así todo sale fresco del horno. ¿Lo necesitas antes? Pregúntanos.
              </p>
              <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="size-3" /> Entrega en todo Santo Domingo
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid flex-1 grid-cols-1 items-start gap-6 md:grid-cols-[55%_45%] md:gap-8">
          {/* Bottom left - illustrations */}
          <div className="relative mx-auto flex h-[280px] w-full max-w-lg items-center justify-center sm:h-[320px] md:h-[380px] md:max-w-xl lg:h-[420px]">
            {heroDesserts.map((dessert, idx) => (
              <div key={dessert.alt} className={dessert.className}>
                {idx === 1 ? (
                  <div className="relative aspect-square h-full">
                    <Image
                      src={dessert.src}
                      alt={dessert.alt}
                      fill
                      priority
                      className="cute-img rounded-full bg-white object-cover"
                    />
                  </div>
                ) : (
                  <Image
                    src={dessert.src}
                    alt={dessert.alt}
                    width={200}
                    height={200}
                    className="cute-img rounded-full bg-white"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Bottom right - CTA */}
          <div className="relative flex flex-col items-center justify-center gap-5 px-4 text-center md:items-start md:justify-start md:pl-10 md:pt-8 md:text-left lg:pl-14">
            <p className="max-w-sm font-base text-base text-brand-black sm:text-lg">
              Tentaciones recién horneadas, con delivery o pickup en Santo Domingo.
              Cheesecakes, brownies, cinnamon rolls y más pecados deliciosos.
            </p>
            <a href="#menu">
              <Button className="rounded-full border-[3px] border-border bg-brand-black px-8 py-6 font-heading text-lg uppercase text-white shadow-[3px_3px_0_rgba(34,34,34,0.85)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand-black hover:shadow-[5px_5px_0_rgba(34,34,34,0.85)]">
                PIDE AHORA
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </a>
            <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
              {bottomTags.map((tag) => (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => scrollToMenuItem(tag.targetId)}
                  className="cute-tag cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(34,34,34,0.85)]"
                >
                  <Image
                    src={tag.icon}
                    alt={tag.label}
                    width={40}
                    height={40}
                    className="rounded-full border border-brand-black"
                  />
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-30 bg-brand-purple border-t-[3px] border-b-[3px] border-brand-black py-2.5">
        <Marquee className="border-none" speed={25}>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-white">
            Tentaciones horneadas desde cero.
          </span>
          <span className="text-brand-yellow">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-white">
            El costo de envío se confirma por email o WhatsApp.
          </span>
          <span className="text-brand-yellow">★</span>
        </Marquee>
      </div>
    </section>
  )
}
