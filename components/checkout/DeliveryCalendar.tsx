"use client"

import { addDays, isSaturday, isSunday, startOfDay } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"

const timeSlots = [
  { id: "morning", label: "Mañana", range: "9am - 12pm" },
  { id: "afternoon", label: "Tarde", range: "12pm - 4pm" },
  { id: "evening", label: "Noche", range: "4pm - 8pm" },
]

export type TimeSlot = (typeof timeSlots)[number]

export { timeSlots }

function getMinimumDeliveryDate(): Date {
  const now = new Date()
  const today = startOfDay(now)
  const dayOfWeek = now.getDay()
  const hour = now.getHours()

  // Friday after 10am, Saturday or Sunday: next Monday
  if (dayOfWeek === 5 && hour >= 10) {
    return addDays(today, 3)
  }
  if (dayOfWeek === 6) {
    return addDays(today, 2)
  }
  if (dayOfWeek === 0) {
    return addDays(today, 1)
  }

  let minDate = addDays(today, 2)
  while (isSaturday(minDate) || isSunday(minDate)) {
    minDate = addDays(minDate, 1)
  }
  return minDate
}

export function DeliveryCalendar({
  date,
  onSelect,
  timeSlot,
  onTimeSlotChange,
}: {
  date: Date | undefined
  onSelect: (date: Date | undefined) => void
  timeSlot: string
  onTimeSlotChange: (slot: string) => void
}) {
  const minDate = getMinimumDeliveryDate()

  const isDateDisabled = (day: Date) => {
    const d = startOfDay(day)
    return d < minDate || isSaturday(d) || isSunday(d)
  }

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up">
      <div>
        <h3 className="mb-3 flex items-center gap-2 font-heading text-lg">
          ¿Cuándo lo quieres?
          <CalendarIcon className="size-5" />
        </h3>
        <div className="flex justify-center rounded-base border-2 border-border bg-white p-4 shadow-shadow">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onSelect}
            disabled={isDateDisabled}
            defaultMonth={minDate}
          />
        </div>
        <p className="mt-2 text-xs text-brand-black/70">
          Entregamos de lunes a viernes. Los pedidos requieren mínimo 48 horas de
          anticipación. Los viernes solo aceptamos pedidos hasta las 10:00 a.m.
        </p>
      </div>
      <div>
        <h3 className="mb-3 font-heading text-lg">Selecciona la hora</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => onTimeSlotChange(slot.id)}
              className={`rounded-base border-2 border-border p-4 text-center shadow-shadow transition-all ${
                timeSlot === slot.id
                  ? "bg-brand-purple text-brand-black"
                  : "bg-white hover:-translate-x-0.5 hover:-translate-y-0.5"
              }`}
            >
              <div className="font-heading">{slot.label}</div>
              <div className="text-xs">{slot.range}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
