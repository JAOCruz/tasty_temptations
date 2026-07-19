"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NeoSparkles } from "@/components/shared/NeoSparkles"
import { CustomOrderDialog } from "@/components/custom-order/CustomOrderDialog"
import { useState } from "react"

export function CustomOrders() {
  const [open, setOpen] = useState(false)

  return (
    <section id="custom-orders" className="relative overflow-hidden bg-pop-dots-cream py-12 sm:py-16">
      <NeoSparkles variant="custom-orders" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-heading text-3xl uppercase text-brand-black sm:text-4xl lg:text-5xl">
            Nuestras Creaciones
          </h2>
          <p className="mx-auto max-w-2xl text-base text-brand-black/80">
            Una pequeña muestra de algunas creaciones que han salido de nuestra cocina.
            Cada pedido personalizado es único y se elabora según la idea de cada cliente.
          </p>
        </div>

        {/* Images grid */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Main image - brownie heart, full width on top */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[6px_6px_0_#222222] sm:col-span-2">
            <Image
              src="/illustrations/custom-orders/brownie-heart.png"
              alt="Brownie en forma de corazón"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-center">
              <p className="font-heading text-xs uppercase text-brand-black">
                💗 Brownie en forma de corazón
              </p>
            </div>
          </div>

          {/* Bottom row - mini brownies */}
          <div className="relative aspect-square overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[5px_5px_0_#222222]">
            <Image
              src="/illustrations/custom-orders/mini-brownies.jpg"
              alt="Mini brownies"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-center">
              <p className="font-heading text-xs uppercase text-brand-black">
                🍫 Mini brownies
              </p>
            </div>
          </div>

          {/* Bottom row - carrot cupcakes */}
          <div className="relative aspect-square overflow-hidden rounded-base border-[3px] border-border bg-white shadow-[5px_5px_0_#222222]">
            <Image
              src="/illustrations/custom-orders/carrot-cupcakes.jpg"
              alt="Carrot cupcakes"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 text-center">
              <p className="font-heading text-xs uppercase text-brand-black">
                🧁 Carrot cupcakes
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => setOpen(true)}
            className="border-[3px] border-border bg-brand-green px-6 py-4 font-heading text-base uppercase text-brand-black shadow-[5px_5px_0_#222222] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand-green/90 hover:shadow-[8px_8px_0_#222222]"
          >
            Quiero un pedido personalizado
          </Button>
        </div>
      </div>

      <CustomOrderDialog open={open} onOpenChange={setOpen} />
    </section>
  )
}
