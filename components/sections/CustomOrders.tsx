"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NeoSparkles } from "@/components/shared/NeoSparkles"
import { CustomOrderDialog } from "@/components/custom-order/CustomOrderDialog"
import { useState } from "react"

export function CustomOrders() {
  const [open, setOpen] = useState(false)

  return (
    <section id="custom-orders" className="relative overflow-hidden bg-white py-12 sm:py-16">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-heading text-3xl uppercase text-brand-black sm:text-4xl lg:text-5xl">
            Nuestras Creaciones
          </h2>
        </div>

        {/* Images grid */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Main image - brownie heart */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[6px_6px_0_#222222] sm:row-span-2">
            <Image
              src="/illustrations/custom-orders/brownie-heart.png"
              alt="Brownie en forma de corazón"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Right column - mini brownies */}
          <div className="relative aspect-square overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[5px_5px_0_#222222]">
            <Image
              src="/illustrations/custom-orders/mini-brownies.jpg"
              alt="Mini brownies"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>

          {/* Right column - carrot cupcakes */}
          <div className="relative aspect-square overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[5px_5px_0_#222222]">
            <Image
              src="/illustrations/custom-orders/carrot-cupcakes.jpg"
              alt="Carrot cupcakes"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Photo captions */}
        <div className="mb-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
          <p className="font-base text-sm text-brand-black">💗 Brownie en forma de corazón</p>
          <div className="flex flex-col gap-4">
            <p className="font-base text-sm text-brand-black">🍫 Mini brownies</p>
            <p className="font-base text-sm text-brand-black">🧁 Carrot cupcakes</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-6 text-center">
          <Button
            onClick={() => setOpen(true)}
            className="rounded-full border-[3px] border-border bg-brand-green px-6 py-4 font-heading text-base uppercase text-brand-black shadow-[5px_5px_0_#222222] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand-green/90 hover:shadow-[8px_8px_0_#222222]"
          >
            <span className="mr-2 text-xl">⊕</span>
            Quiero un pedido personalizado
          </Button>
        </div>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-center text-base text-brand-black/80">
          Una pequeña muestra de algunas creaciones que han salido de nuestra cocina.
          Cada pedido personalizado es único y se elabora según la idea de cada cliente.
        </p>
      </div>

      <CustomOrderDialog open={open} onOpenChange={setOpen} />
    </section>
  )
}
