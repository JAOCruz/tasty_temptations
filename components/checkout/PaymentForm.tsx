"use client"

import { CreditCard, DollarSign, Landmark } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const paymentMethods = [
  { id: "card", label: "Tarjeta", icon: CreditCard },
  { id: "transfer", label: "Transferencia", icon: Landmark },
  { id: "cash", label: "Efectivo", icon: DollarSign },
]

export { paymentMethods }

export function PaymentForm({
  method,
  onMethodChange,
  card,
  onCardChange,
}: {
  method: string
  onMethodChange: (method: string) => void
  card: { number: string; expiry: string; cvc: string }
  onCardChange: (card: { number: string; expiry: string; cvc: string }) => void
}) {
  return (
    <div className="flex flex-col gap-4 animate-fade-in-up">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {paymentMethods.map((paymentMethod) => (
          <button
            key={paymentMethod.id}
            onClick={() => onMethodChange(paymentMethod.id)}
            className={`flex flex-col items-center gap-2 rounded-base border-2 border-border p-4 shadow-shadow transition-all ${
              method === paymentMethod.id
                ? "bg-brand-green text-brand-black"
                : "bg-white hover:-translate-x-0.5 hover:-translate-y-0.5"
            }`}
          >
            <paymentMethod.icon className="size-6" />
            <span className="text-center text-xs font-heading">
              {paymentMethod.label}
            </span>
          </button>
        ))}
      </div>

      {method === "card" && (
        <div className="flex flex-col gap-3 rounded-base border-2 border-border bg-white p-4 shadow-shadow">
          <div className="grid gap-2">
            <Label htmlFor="card-number">Número de tarjeta</Label>
            <Input
              id="card-number"
              value={card.number}
              onChange={(e) => onCardChange({ ...card, number: e.target.value })}
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="expiry">Vencimiento</Label>
              <Input
                id="expiry"
                value={card.expiry}
                onChange={(e) => onCardChange({ ...card, expiry: e.target.value })}
                placeholder="MM/YY"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                value={card.cvc}
                onChange={(e) => onCardChange({ ...card, cvc: e.target.value })}
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      {method === "transfer" && (
        <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow text-center">
          <p className="font-heading">Paga por transferencia bancaria</p>
          <p className="mt-1 text-sm text-brand-black/70">
            Te enviaremos los datos bancarios para confirmar tu pedido.
          </p>
        </div>
      )}

      {method === "cash" && (
        <div className="rounded-base border-2 border-border bg-white p-4 shadow-shadow text-center">
          <p className="font-heading">Paga en efectivo cuando lleguen tus dulces</p>
        </div>
      )}
    </div>
  )
}
