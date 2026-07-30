"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { timeSlots } from "./DeliveryCalendar"
import { Truck } from "lucide-react"

export function OrderSummary({
  form,
  date,
  timeSlot,
}: {
  form: {
    name: string
    phone: string
    address: string
    neighborhood: string
    notes: string
  }
  date: Date | undefined
  timeSlot: string
}) {
  const { items, total } = useCartStore()
  const subtotal = total()

  return (
    <div className="flex flex-col gap-4 animate-fade-in-up">
      <div className="rounded-base border-2 border-border bg-brand-cream p-3 shadow-shadow">
        <div className="flex items-center gap-2">
          <Truck className="size-4 shrink-0" />
          <span className="font-heading text-sm">
            El costo de envío se confirma manualmente por email o WhatsApp.
          </span>
        </div>
      </div>

      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-3 font-heading text-lg">Productos</h3>
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.flavor ?? "default"}`}
            className="flex justify-between py-2 text-sm"
          >
            <span>
              {item.product.emoji} {item.product.name} x{item.quantity}
              {item.flavor && (
                <span className="ml-1 text-xs text-brand-purple">({item.flavor})</span>
              )}
            </span>
            <span className="font-heading">
              {formatPrice(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
        <Separator className="my-2" />
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-heading">{formatPrice(subtotal)}</span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between rounded-base bg-brand-black p-3 text-lg text-white shadow-[4px_4px_0_#222222]">
          <span className="font-heading">TOTAL</span>
          <span className="font-heading">{formatPrice(subtotal)}</span>
        </div>
      </div>

      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-2 font-heading text-lg">Detalles de entrega</h3>
        <p className="text-sm">
          <strong>{form.name}</strong>
          <br />
          {form.phone}
          <br />
          {form.address}
          <br />
          {form.neighborhood}
        </p>
        {form.notes && (
          <p className="mt-2 text-sm text-muted-foreground">
            Notas: {form.notes}
          </p>
        )}
      </div>

      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-2 font-heading text-lg">Hora de entrega</h3>
        <p className="text-sm">
          {date ? format(date, "EEEE, MMMM do", { locale: es }) : ""}
          <br />
          {timeSlots.find((s) => s.id === timeSlot)?.range}
        </p>
      </div>
    </div>
  )
}
