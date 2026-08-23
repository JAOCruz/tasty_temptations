"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Marquee } from "@/components/shared/Marquee"
import { testimonials } from "@/lib/data"
import { Star, Quote } from "lucide-react"
import { NeoSparkles } from "@/components/shared/NeoSparkles"

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
    <Card className="w-[340px] shrink-0 border-[3px] border-border bg-white shadow-[5px_5px_0_#222222] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#222222]">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-4 fill-brand-yellow text-brand-yellow"
              />
            ))}
          </div>
          <Quote className="size-6 text-brand-purple" />
        </div>
        <p className="min-h-[80px] whitespace-normal text-base leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-auto border-t-2 border-border pt-4">
          <p className="font-heading text-base">{name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b/oklch from-brand-green to-brand-purple py-20 sm:py-28">
      <NeoSparkles variant="testimonials" />
      <div className="relative z-10 mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-block rounded-base border-[3px] border-border bg-white p-6 shadow-[6px_6px_0_#222222] sm:p-8">
          <span className="pop-art-sticker pop-art-sticker-yellow mb-4 inline-flex rotate-3">
            5 estrellas ⭐
          </span>
          <h2 className="mb-4 font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto max-w-xl text-base text-brand-black/80">
            Porque no hay mejor recomendación que la de quien ya probó nuestras tentaciones 💚
          </p>
        </div>
      </div>

      <div className="relative">
        <Marquee
          className="border-y-2 border-border bg-brand-purple py-6"
          direction="left"
          speed={35}
        >
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              name={t.name}
              neighborhood={t.neighborhood}
            />
          ))}
        </Marquee>
      </div>
    </section>
  )
}
