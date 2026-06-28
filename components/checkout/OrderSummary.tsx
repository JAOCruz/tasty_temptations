"use client"

import { format } from "date-fns"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/store/cart-store"
import { timeSlots } from "./DeliveryCalendar"

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
  const deliveryFee = subtotal >= 25 ? 0 : 3.99
  const orderTotal = subtotal + deliveryFee

  return (
    <div className="flex flex-col gap-4 animate-fade-in-up">
      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-3 font-heading text-lg">Items</h3>
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between py-2 text-sm"
          >
            <span>
              {item.product.emoji} {item.product.name} x{item.quantity}
            </span>
            <span className="font-heading">
              ${(item.product.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator className="my-2" />
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span className="font-heading">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Delivery</span>
          <span className="font-heading">
            {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between text-lg">
          <span className="font-heading">TOTAL</span>
          <span className="font-heading text-brand-gold">
            ${orderTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-2 font-heading text-lg">Delivery Details</h3>
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
            Notes: {form.notes}
          </p>
        )}
      </div>

      <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow">
        <h3 className="mb-2 font-heading text-lg">Delivery Time</h3>
        <p className="text-sm">
          {date ? format(date, "EEEE, MMMM do") : ""}
          <br />
          {timeSlots.find((s) => s.id === timeSlot)?.range}
        </p>
      </div>
    </div>
  )
}
