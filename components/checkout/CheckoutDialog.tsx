"use client"

import { useState } from "react"
import confetti from "canvas-confetti"
import { Check, ChevronLeft, ChevronRight, PartyPopper } from "lucide-react"
import Turnstile from "react-turnstile"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useCartStore } from "@/lib/store/cart-store"
import { neighborhoods } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import { startOfTomorrow, format } from "date-fns"
import { es } from "date-fns/locale"
import { DeliveryCalendar, timeSlots } from "./DeliveryCalendar"
import { OrderSummary } from "./OrderSummary"
import { PaymentForm } from "./PaymentForm"

type Step = "details" | "date" | "summary" | "payment" | "success"

const stepLabels: Record<Step, string> = {
  details: "Datos de entrega",
  date: "Fecha de entrega",
  summary: "Resumen del pedido",
  payment: "Pago",
  success: "Confirmación",
}

const FREE_DELIVERY_THRESHOLD = 1800

export function CheckoutDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { items, total, clearCart } = useCartStore()
  const [step, setStep] = useState<Step>("details")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    neighborhood: "",
    notes: "",
  })
  const [date, setDate] = useState<Date | undefined>(startOfTomorrow())
  const [timeSlot, setTimeSlot] = useState("morning")
  const [paymentMethod, setPaymentMethod] = useState("transfer")
  const [card, setCard] = useState({ number: "", expiry: "", cvc: "" })
  const [orderNumber, setOrderNumber] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const subtotal = total()
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : 250
  const orderTotal = subtotal + deliveryFee
  const amountForFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal)

  const canProceed = () => {
    switch (step) {
      case "details":
        return (
          form.name.trim() &&
          form.phone.trim() &&
          form.address.trim() &&
          form.neighborhood
        )
      case "date":
        return date && timeSlot
      case "summary":
        return true
      case "payment":
        return !!turnstileToken
      default:
        return false
    }
  }

  const handlePlaceOrder = async () => {
    const number = Math.floor(1000 + Math.random() * 9000).toString()
    setOrderNumber(number)

    const orderPayload = {
      _subject: `Nuevo pedido #${number} - ${form.name}`,
      orderNumber: number,
      name: form.name,
      phone: form.phone,
      address: form.address,
      neighborhood: form.neighborhood,
      notes: form.notes,
      deliveryDate: date ? format(date, "EEEE, MMMM do", { locale: es }) : "",
      timeSlot: timeSlots.find((s) => s.id === timeSlot)?.range,
      paymentMethod,
      items: items.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        total: item.product.price * item.quantity,
      })),
      subtotal,
      deliveryFee,
      orderTotal,
    }

    try {
      const response = await fetch("https://submit-form.com/1Qk2wvqzQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
        ...orderPayload,
        "cf-turnstile-response": turnstileToken,
      }),
      })
      if (!response.ok) {
        const errorText = await response.text().catch(() => "")
        console.error("Formspark error:", response.status, errorText)
      }
    } catch (error) {
      console.error("Failed to submit order to Formspark:", error)
    }

    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8B5CF6", "#8EE36B", "#fff3a3", "#ffffff", "#222222"],
    })
    setStep("success")
    clearCart()
  }

  const reset = () => {
    setStep("details")
    setForm({ name: "", phone: "", address: "", neighborhood: "", notes: "" })
    setDate(startOfTomorrow())
    setTimeSlot("morning")
    setPaymentMethod("transfer")
    setCard({ number: "", expiry: "", cvc: "" })
    setOrderNumber(null)
    setTurnstileToken(null)
    onOpenChange(false)
  }

  const steps: Step[] = ["details", "date", "summary", "payment"]
  const currentStepIndex = steps.indexOf(step)

  return (
    <Dialog open={open} onOpenChange={reset}>
      <DialogContent className="flex h-[95vh] max-h-[900px] w-[95vw] max-w-2xl flex-col overflow-hidden border-2 border-border bg-background p-0 shadow-shadow sm:h-auto">
        <DialogHeader className="border-b-2 border-border p-4 sm:p-6">
          <DialogTitle className="font-heading text-xl sm:text-2xl">
            {step === "success" ? "Pedido confirmado" : stepLabels[step]}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {step === "details" && (
            <div className="flex flex-col gap-4 animate-fade-in-up">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="María García"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="809-555-1234"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Calle Principal #123"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="neighborhood">Sector</Label>
                <Select
                  value={form.neighborhood}
                  onValueChange={(value) =>
                    setForm({ ...form, neighborhood: value })
                  }
                >
                  <SelectTrigger id="neighborhood">
                    <SelectValue placeholder="Selecciona tu sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {neighborhoods.map((n) => (
                      <SelectItem key={n} value={n}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="notes">Notas de entrega</Label>
                <Textarea
                  id="notes"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Toca el timbre, dejar en recepción..."
                />
              </div>
            </div>
          )}

          {step === "date" && (
            <DeliveryCalendar
              date={date}
              onSelect={setDate}
              timeSlot={timeSlot}
              onTimeSlotChange={setTimeSlot}
            />
          )}

          {step === "summary" && (
            <OrderSummary form={form} date={date} timeSlot={timeSlot} />
          )}

          {step === "payment" && (
            <div className="flex flex-col gap-4">
              <PaymentForm
                method={paymentMethod}
                onMethodChange={setPaymentMethod}
                card={card}
                onCardChange={setCard}
              />
              <div className="flex justify-center">
                <Turnstile
                  sitekey="0x4AAAAAAD5Unh2KNu7SM6sx"
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                />
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center gap-6 py-8 text-center animate-fade-in-up">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-border bg-brand-green shadow-shadow">
                <Check className="size-10 text-brand-black" />
              </div>
              <div>
                <h3 className="flex items-center justify-center gap-2 font-heading text-2xl">
                  <PartyPopper className="size-7 text-brand-yellow" />
                  ¡PEDIDO HECHO!
                </h3>
                <p className="text-muted-foreground">
                  ¡Tus dulces se están preparando!
                </p>
              </div>
              <div className="w-full rounded-base border-2 border-border bg-white p-6 shadow-shadow">
                <p className="font-heading text-lg">Pedido #{orderNumber}</p>
                <Separator className="my-3" />
                <p className="text-sm">
                  Entrega estimada:
                  <br />
                  <strong>
                    {date ? format(date, "EEEE, MMMM do", { locale: es }) : ""} —{" "}
                    {timeSlots.find((s) => s.id === timeSlot)?.range}
                  </strong>
                </p>
                <Separator className="my-3" />
                <p className="text-sm">
                  Método de pago:
                  <br />
                  <strong>
                    {paymentMethod === "transfer" && "Transferencia bancaria"}
                    {paymentMethod === "cash" && "Efectivo al entregar"}
                  </strong>
                </p>
                {paymentMethod === "transfer" && (
                  <p className="mt-2 text-xs text-brand-black/70">
                    Te contactaremos para enviarte los datos bancarios y confirmar tu pedido.
                  </p>
                )}
              </div>
              <Button
                disabled
                className="w-full bg-brand-green text-brand-black hover:bg-brand-green/90"
              >
                Pedido registrado
              </Button>
            </div>
          )}
        </div>

        {step !== "success" && (
          <div className="flex items-center justify-between border-t-2 border-border p-4 sm:p-6">
            <Button
              variant="neutral"
              onClick={() => {
                if (currentStepIndex > 0) setStep(steps[currentStepIndex - 1])
                else onOpenChange(false)
              }}
            >
              <ChevronLeft className="mr-1 size-4" />
              {step === "details" ? "Cancelar" : "Atrás"}
            </Button>
            <Button
              className="bg-brand-green text-brand-black hover:bg-brand-green/90"
              disabled={!canProceed()}
              onClick={() => {
                if (step === "payment") {
                  handlePlaceOrder()
                } else {
                  setStep(steps[currentStepIndex + 1])
                }
              }}
            >
              {step === "payment" ? "CONFIRMAR PEDIDO" : "Siguiente"}
              {step !== "payment" && <ChevronRight className="ml-1 size-4" />}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
