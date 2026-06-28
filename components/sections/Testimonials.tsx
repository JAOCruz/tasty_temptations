"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/shared/Marquee"
import { testimonials } from "@/lib/data"
import { Star } from "lucide-react"

function TestimonialCard({
  quote,
  name,
  neighborhood,
}: {
  quote: string
  name: string
  neighborhood: string
}) {
  return (
    <Card className="w-[300px] shrink-0 border-2 border-border bg-white shadow-shadow">
      <CardContent className="flex flex-col gap-3 p-6">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-4 fill-brand-gold text-brand-gold"
            />
          ))}
        </div>
        <p className="text-sm text-foreground">&ldquo;{quote}&rdquo;</p>
        <div className="mt-auto">
          <p className="font-heading text-sm">{name}</p>
          <p className="text-xs text-muted-foreground">— {neighborhood}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="bg-brand-pink py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
          HAPPY CUSTOMERS
        </h2>
      </div>

      <Marquee className="border-y-2 border-border bg-brand-pink py-4" direction="left" speed={30}>
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            quote={t.quote}
            name={t.name}
            neighborhood={t.neighborhood}
          />
        ))}
      </Marquee>
    </section>
  )
}
