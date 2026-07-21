"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { NeoSparkles } from "@/components/shared/NeoSparkles"

const faqs = [
  {
    id: "delivery",
    icon: "🚗",
    question: "¿Hacen delivery?",
    answer: (
      <>
        <p className="mb-2">¡Sí! 🚗</p>
        <p>Ofrecemos servicio de delivery con un costo adicional que varía según la zona.</p>
        <p>Si lo prefieres, también puedes retirar tu pedido (Pick Up) sin costo.</p>
      </>
    ),
  },
  {
    id: "pickup",
    icon: "📍",
    question: "¿Dónde hacen Pick Up?",
    answer: (
      <>
        <p>Una vez confirmemos tu pedido, te enviaremos la ubicación para el retiro 💚</p>
      </>
    ),
  },
  {
    id: "payment",
    icon: "💵",
    question: "¿Qué métodos de pago aceptan?",
    answer: (
      <>
        <p className="mb-2">Aceptamos:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>Transferencia bancaria.</li>
        </ul>
      </>
    ),
  },
  {
    id: "48h",
    icon: "⏰",
    question: "¿Puedo pedir con menos de 48 horas de anticipación?",
    answer: (
      <>
        <p>Nuestro tiempo recomendado es de 48 horas de anticipación, pero si necesitas un pedido de último momento, escríbenos. Revisaremos nuestra disponibilidad y haremos lo posible por ayudarte 💚</p>
      </>
    ),
  },
  {
    id: "cancel",
    icon: "❌",
    question: "¿Puedo cancelar o modificar mi pedido?",
    answer: (
      <>
        <p className="mb-2">¡Claro! Puedes solicitar cambios o cancelaciones con al menos 24 horas de anticipación.</p>
        <p>Después de ese tiempo, el anticipo no será reembolsable, ya que es posible que hayamos comenzado la preparación de tu pedido.</p>
      </>
    ),
  },
  {
    id: "allergens",
    icon: "🥜",
    question: "¿Los productos contienen alérgenos?",
    answer: (
      <>
        <p className="mb-2">Sí. Nuestros productos pueden contener ingredientes como:</p>
        <ul className="mb-2 list-inside list-disc space-y-1">
          <li>Leche</li>
          <li>Huevos</li>
          <li>Trigo</li>
          <li>Nueces</li>
        </ul>
        <p>Si tienes alguna alergia o restricción alimentaria, escríbenos antes de ordenar para orientarte sobre las opciones disponibles.</p>
      </>
    ),
  },
  {
    id: "custom",
    icon: "🎂",
    question: "¿Hacen pedidos personalizados?",
    answer: (
      <>
        <p className="mb-2">¡Sí! Nos encanta crear pedidos especiales. 💕</p>
        <p>Dependiendo del producto y de nuestra disponibilidad, podemos personalizar tu pedido para hacerlo aún más especial.</p>
      </>
    ),
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-pop-dots-cream py-20 sm:py-28">
      <NeoSparkles variant="faq" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto inline-block rounded-base border-[3px] border-border bg-white p-6 shadow-[6px_6px_0_#222222] sm:p-8">
            <span className="pop-art-sticker pop-art-sticker-purple mb-4 inline-flex -rotate-2">
              ¿Dudas? 💬
            </span>
            <h2 className="mb-3 font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
              Preguntas frecuentes
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-black/80">
              Todo lo que necesitas saber antes de ordenar tu postre favorito.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border-[3px] border-border bg-white shadow-[5px_5px_0_#222222]"
            >
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                <span className="flex items-center gap-3 font-heading text-base sm:text-lg">
                  <span className="text-xl">{faq.icon}</span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-2 text-base text-brand-black/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
