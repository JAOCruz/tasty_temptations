"use client"

import { Card, CardContent } from "@/components/ui/card"
import { NeoSparkles } from "@/components/shared/NeoSparkles"
import { ShoppingCart, Calendar, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    Icon: ShoppingCart,
    title: "Elige tus favoritos",
    description: "Descubre nuestras deliciosas opciones y escoge las que más te gusten.",
  },
  {
    number: "02",
    Icon: Calendar,
    title: "Selecciona la fecha",
    description: "Los pedidos deben realizarse con al menos 48 horas de anticipación.",
  },
  {
    number: "03",
    Icon: Truck,
    title: "Recibe tu pedido",
    description: "Elige entre delivery o Pick Up y disfruta tus postres recién preparados 💚",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-pop-dots-green py-20 sm:py-28">
      <NeoSparkles variant="how-it-works" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <div className="mx-auto inline-block rounded-base border-[3px] border-border bg-white p-6 text-center shadow-[6px_6px_0_#222222] sm:p-8">
          <span className="pop-art-sticker pop-art-sticker-yellow mb-4 inline-flex -rotate-2">
            Fácil y rápido
          </span>
          <h2 className="mb-3 font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
            CÓMO FUNCIONA
          </h2>
          <p className="mx-auto max-w-xl text-base text-brand-black/80">
            Tu próximo antojo está a solo tres pasos 🍰
          </p>
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-[70px] hidden h-[3px] bg-brand-black/20 lg:block" />

          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative z-10 border-[3px] border-border bg-white shadow-[5px_5px_0_#222222] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#222222]"
            >
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-border bg-brand-purple shadow-[4px_4px_0_#222222]">
                  <step.Icon className="size-7 text-white" strokeWidth={2.5} />
                </div>
                <span className="font-heading text-5xl text-brand-black/10">
                  {step.number}
                </span>
                <h3 className="font-heading text-2xl">{step.title}</h3>
                <p className="text-base text-brand-black/80">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
