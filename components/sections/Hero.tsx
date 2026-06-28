"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/shared/Marquee"
import { Sparkles, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col overflow-hidden bg-brand-cream pt-16">
      {/* Background split with grid lines */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-brand-pink" />
        <div className="bg-brand-cream" />
      </div>

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-brand-black" />
        <div className="absolute left-0 top-[50%] h-[3px] w-full bg-brand-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        {/* Top half */}
        <div className="grid flex-1 grid-cols-1 items-end gap-6 pb-6 md:grid-cols-2 md:gap-8">
          {/* Top left */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:pb-8 md:text-left">
            <h1 className="font-heading text-6xl font-bold uppercase leading-[0.85] tracking-tight text-brand-black sm:text-7xl lg:text-8xl">
              TASTY
              <br />
              TEMPTATIONS
            </h1>
            <div className="rounded-full border-2 border-border bg-brand-gold px-6 py-2 shadow-shadow">
              <span className="font-heading text-xs uppercase tracking-wider text-brand-black sm:text-sm">
                FRESH BAKED. DELIVERED DAILY.
              </span>
            </div>
          </div>

          {/* Top right */}
          <div className="relative hidden h-full items-start justify-end md:flex md:pt-8">
            <Sparkles className="size-12 text-brand-gold" />
            <Sparkles className="ml-4 mt-8 size-8 text-brand-gold" />
            <Sparkles className="ml-6 mt-16 size-10 text-brand-gold" />
          </div>
        </div>

        {/* Bottom half */}
        <div className="grid flex-1 grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {/* Bottom left - illustrations */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center md:max-w-lg">
            {/* Donut stack left */}
            <div className="absolute -left-2 bottom-0 z-10 w-24 -rotate-12 sm:w-28 md:-left-4 md:w-32">
              <Image
                src="/illustrations/glazed-donut-stack.png"
                alt="Glazed Donut Stack"
                width={180}
                height={180}
                className="drop-shadow-[4px_4px_0px_#0a0a0a]"
              />
            </div>

            {/* Main croissant center */}
            <div className="relative z-20 w-44 -rotate-6 sm:w-52 md:w-60 lg:w-64">
              <Image
                src="/illustrations/croissant.png"
                alt="Fresh Croissant"
                width={320}
                height={320}
                priority
                className="drop-shadow-[6px_6px_0px_#0a0a0a]"
              />
            </div>

            {/* Cake slice right */}
            <div className="absolute -right-2 bottom-2 z-10 w-24 rotate-12 sm:w-28 md:-right-4 md:w-32">
              <Image
                src="/illustrations/pink-cake-slice.png"
                alt="Pink Cake Slice"
                width={180}
                height={180}
                className="drop-shadow-[4px_4px_0px_#0a0a0a]"
              />
            </div>

            {/* Curved arrow */}
            <svg
              className="absolute -right-8 top-0 w-20 rotate-12 text-white md:-right-12 md:w-24"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path d="M10 90 Q 60 80 80 30" strokeLinecap="round" />
              <path
                d="M70 40 L 80 30 L 85 45"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom right - CTA */}
          <div className="flex flex-col items-center justify-center gap-5 text-center md:items-start md:pt-8 md:text-left">
            <p className="max-w-sm font-base text-base text-brand-black sm:text-lg">
              Freshly baked desserts delivered to your door in Santo Domingo.
              Order by 8pm for next-day delivery.
            </p>
            <a href="#menu">
              <Button className="border-2 border-border bg-brand-black px-8 py-6 font-heading text-lg uppercase text-white shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:bg-brand-black hover:shadow-none">
                ORDER NOW
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom lime bar */}
      <div className="relative z-20 h-2 bg-brand-lime" />

      {/* Marquee ticker */}
      <div className="relative z-30 bg-brand-black py-2">
        <Marquee className="border-none" speed={20}>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-white">
            FREE SHIPPING ON ORDERS $25+
          </span>
          <span className="text-brand-gold">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-white">
            FRESH BAKED DAILY
          </span>
          <span className="text-brand-gold">★</span>
          <span className="px-4 font-heading text-sm uppercase tracking-wider text-white">
            DELIVERED TO YOUR DOOR
          </span>
          <span className="text-brand-gold">★</span>
        </Marquee>
      </div>
    </section>
  )
}
