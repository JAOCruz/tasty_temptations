import { Hero, type HeroBgVariant } from "@/components/sections/Hero"

const variants: { id: HeroBgVariant; label: string; note: string }[] = [
  {
    id: "shift",
    label: "Variante 1 · Gradiente animado",
    note: "Solo CSS — el gradiente se mueve lentamente",
  },
  {
    id: "mesh",
    label: "Variante 2 · Mesh blobs",
    note: "Manchas de color difuminadas flotando (tipo Stripe/Linear)",
  },
  {
    id: "aurora",
    label: "Variante 3 · Aurora",
    note: "Blobs + brillo que sigue el cursor — mueve el mouse",
  },
]

export default function HeroTest() {
  return (
    <main>
      {variants.map((v) => (
        <div key={v.id} className="relative">
          <div className="absolute left-4 top-20 z-50 rounded-full border-[3px] border-border bg-brand-black px-4 py-2 font-heading text-xs uppercase text-white shadow-[3px_3px_0_rgba(34,34,34,0.85)] sm:text-sm">
            {v.label}
            <span className="ml-2 hidden font-normal normal-case text-white/70 sm:inline">
              {v.note}
            </span>
          </div>
          <Hero bgVariant={v.id} />
        </div>
      ))}
    </main>
  )
}
