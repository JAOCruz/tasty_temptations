"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"

const contactOptions = [
  { id: "whatsapp", label: "WhatsApp", emoji: "📱" },
  { id: "call", label: "Llamada telefónica", emoji: "📞" },
  { id: "email", label: "Correo electrónico", emoji: "📧" },
]

const paymentOptions = [
  { id: "transfer", label: "Transferencia bancaria", emoji: "🏦" },
]

const steps = [
  { id: "order", title: "Pedido personalizado" },
  { id: "details", title: "Detalles" },
  { id: "inspiration", title: "Inspiración" },
]

export function CustomOrderDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    contactMethod: "whatsapp",
    paymentMethod: "transfer",
    product: "",
    date: "",
    flavor: "",
    quantity: "",
    people: "",
    budget: "",
    inspirationLink: "",
    idea: "",
    notes: "",
  })

  const update = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }))
  }

  const reset = () => {
    setStep(0)
    setSubmitted(false)
    setForm({
      name: "",
      phone: "",
      email: "",
      contactMethod: "whatsapp",
      paymentMethod: "transfer",
      product: "",
      date: "",
      flavor: "",
      quantity: "",
      people: "",
      budget: "",
      inspirationLink: "",
      idea: "",
      notes: "",
    })
  }

  const handleClose = () => {
    onOpenChange(false)
    setTimeout(reset, 300)
  }

  const canProceed = () => {
    if (step === 0) {
      return form.name.trim() && form.phone.trim() && form.product.trim() && form.date.trim()
    }
    if (step === 1) {
      return form.flavor.trim() && form.quantity.trim() && form.people.trim() && form.budget.trim()
    }
    return true
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const response = await fetch("https://submit-form.com/1Qk2wvqzQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `Nuevo pedido personalizado - ${form.name}`,
        }),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Hubo un error al enviar la solicitud. Intenta de nuevo.")
      }
    } catch (error) {
      alert("No se pudo enviar la solicitud. Verifica tu conexión.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border-[3px] border-border bg-white p-0 shadow-[6px_6px_0_#222222]">
        {!submitted ? (
          <>
            <DialogHeader className="sticky top-0 z-10 border-b-2 border-border bg-brand-cream p-6 text-left">
              <div className="mb-3 flex gap-2">
                {steps.map((s, idx) => (
                  <div
                    key={s.id}
                    className={`flex-1 rounded-base border-[3px] py-2 text-center text-xs font-heading uppercase ${
                      idx === step
                        ? "border-border bg-brand-green text-brand-black shadow-[3px_3px_0_#222222]"
                        : idx < step
                          ? "border-border bg-brand-purple text-white"
                          : "border-transparent bg-white/50 text-brand-black/50"
                    }`}
                  >
                    {idx + 1}. {s.title}
                  </div>
                ))}
              </div>
              <DialogTitle className="font-heading text-2xl uppercase">
                {steps[step].title}
              </DialogTitle>
              <DialogDescription className="text-base text-brand-black/70">
                Completa los campos obligatorios para continuar.
              </DialogDescription>
            </DialogHeader>

            <div className="p-6 pt-2">
              {step === 0 && (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="co-name">Nombre *</Label>
                    <Input
                      id="co-name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-phone">Teléfono *</Label>
                    <Input
                      id="co-phone"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="809-000-0000"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-email">Email (opcional)</Label>
                    <Input
                      id="co-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>¿Cómo prefieres que te contactemos? *</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {contactOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => update("contactMethod", option.id)}
                          className={`flex items-center justify-center gap-2 rounded-base border-[3px] px-3 py-2 text-sm transition-all ${
                            form.contactMethod === option.id
                              ? "border-border bg-brand-green text-brand-black shadow-[3px_3px_0_#222222]"
                              : "border-border bg-white hover:bg-brand-cream"
                          }`}
                        >
                          <span>{option.emoji}</span>
                          <span className="font-heading">{option.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-product">Producto *</Label>
                    <Input
                      id="co-product"
                      value={form.product}
                      onChange={(e) => update("product", e.target.value)}
                      placeholder="Ej: Brownie en forma de corazón"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-date">Fecha *</Label>
                    <Input
                      id="co-date"
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>
                  <p className="rounded-base border-2 border-brand-yellow bg-brand-yellow/20 p-3 text-sm text-brand-black">
                    Nota: Para garantizar disponibilidad y una elaboración cuidadosa,
                    recomendamos realizar los pedidos personalizados con al menos{" "}
                    <strong>5 días de anticipación</strong>.
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="co-flavor">Sabor *</Label>
                    <Input
                      id="co-flavor"
                      value={form.flavor}
                      onChange={(e) => update("flavor", e.target.value)}
                      placeholder="Ej: Chocolate, vainilla, red velvet..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-quantity">Cantidad *</Label>
                    <Input
                      id="co-quantity"
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      placeholder="Ej: 1 docena"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-people">Número de personas *</Label>
                    <Input
                      id="co-people"
                      value={form.people}
                      onChange={(e) => update("people", e.target.value)}
                      placeholder="Ej: 10 personas"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-budget">Presupuesto aproximado *</Label>
                    <Input
                      id="co-budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      placeholder="Ej: RD$2,000"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Método de pago *</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {paymentOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => update("paymentMethod", option.id)}
                          className={`flex items-center justify-center gap-2 rounded-base border-[3px] px-3 py-2 text-sm transition-all ${
                            form.paymentMethod === option.id
                              ? "border-border bg-brand-green text-brand-black shadow-[3px_3px_0_#222222]"
                              : "border-border bg-white hover:bg-brand-cream"
                          }`}
                        >
                          <span>{option.emoji}</span>
                          <span className="font-heading">{option.label}</span>
                        </button>
                      ))}
                    </div>
                    <p className="rounded-base border-2 border-brand-yellow bg-brand-yellow/20 p-2 text-xs text-brand-black">
                      <strong>Política de pago 50/50:</strong> solicitamos el 50% del total
                      para comenzar a preparar tu pedido personalizado. Puedes pagar solo el
                      50% ahora y el resto antes de la entrega, o el 100% de una sola vez si
                      lo prefieres.
                    </p>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="co-link">Comparte un enlace de Pinterest/Instagram</Label>
                    <Input
                      id="co-link"
                      value={form.inspirationLink}
                      onChange={(e) => update("inspirationLink", e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-idea">Cuéntanos tu idea *</Label>
                    <Textarea
                      id="co-idea"
                      value={form.idea}
                      onChange={(e) => update("idea", e.target.value)}
                      placeholder="Describe tu idea: colores, temática, dedicatoria, nivel de dulzura..."
                      rows={5}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="co-notes">Notas adicionales</Label>
                    <Textarea
                      id="co-notes"
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Alergias, preferencias de entrega, etc."
                      rows={3}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-border p-6">
              <Button
                variant="neutral"
                onClick={() => {
                  if (step === 0) handleClose()
                  else setStep(step - 1)
                }}
              >
                <ArrowLeft className="mr-1 size-4" />
                {step === 0 ? "Cancelar" : "Atrás"}
              </Button>
              {step < steps.length - 1 ? (
                <Button
                  disabled={!canProceed()}
                  onClick={() => setStep(step + 1)}
                  className="bg-brand-green text-brand-black hover:bg-brand-green/90"
                >
                  Siguiente
                  <ArrowRight className="ml-1 size-4" />
                </Button>
              ) : (
                <Button
                  disabled={!canProceed() || submitting}
                  onClick={handleSubmit}
                  className="bg-brand-green text-brand-black hover:bg-brand-green/90"
                >
                  {submitting ? "Enviando..." : "Enviar solicitud"}
                  <Check className="ml-1 size-4" />
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 p-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-border bg-brand-green shadow-[5px_5px_0_#222222]">
              <Check className="size-10 text-brand-black" />
            </div>
            <div>
              <h3 className="mb-2 font-heading text-3xl uppercase text-brand-black">
                ¡Solicitud recibida!
              </h3>
              <p className="text-brand-black/80">
                Gracias por confiar en Tasty Temptations. Hemos recibido los detalles de tu
                pedido personalizado.
              </p>
            </div>
            <div className="w-full rounded-base border-2 border-brand-green bg-brand-green/20 p-5 text-left shadow-shadow">
              <p className="mb-2 font-heading text-lg">💳 Pago por transferencia</p>
              <p className="text-sm text-brand-black/80">
                Para pedidos personalizados trabajamos con <strong>50% de adelanto</strong>{" "}
                para comenzar a preparar tu pedido. Una vez aprobemos tu cotización, te
                enviaremos los datos bancarios. Puedes pagar el 50% ahora y el resto antes de
                la entrega, o el 100% de una sola vez si lo prefieres.
              </p>
            </div>
            <div className="w-full rounded-base border-2 border-border bg-brand-cream p-5 text-left shadow-shadow">
              <p className="mb-2 font-heading text-lg">¿Qué sucede ahora?</p>
              <ul className="space-y-2 text-sm text-brand-black/80">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                  Revisaremos tu solicitud y evaluaremos la disponibilidad para la fecha indicada.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                  Prepararemos una cotización basada en el tamaño, diseño y nivel de detalle solicitado.
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-purple" />
                  Te contactaremos en un plazo de 24 horas para compartir el presupuesto y confirmar cualquier detalle necesario.
                </li>
              </ul>
            </div>
            <p className="text-sm text-brand-black/70">
              Cada creación es elaborada especialmente para ti, por eso revisamos cada
              solicitud con cuidado antes de cotizarla 💚
            </p>
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button
                variant="neutral"
                onClick={reset}
                className="flex-1"
              >
                <ArrowLeft className="mr-1 size-4" />
                Volver al menú
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
