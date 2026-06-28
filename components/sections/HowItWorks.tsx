"use client"

import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: "🛒",
    title: "Browse & Pick",
    description: "Choose from our fresh daily menu",
  },
  {
    number: "02",
    icon: "📅",
    title: "Pick Your Date",
    description: "Select delivery date up to 7 days ahead",
  },
  {
    number: "03",
    icon: "🚀",
    title: "We Deliver!",
    description: "Fresh to your door, same day or scheduled",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-lime py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
          HOW IT WORKS
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="border-2 border-border bg-white shadow-shadow transition-all hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
                <span className="font-heading text-5xl text-brand-pink">
                  {step.number}
                </span>
                <span className="text-5xl">{step.icon}</span>
                <h3 className="font-heading text-2xl">{step.title}</h3>
                <p className="text-base text-muted-foreground">
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
