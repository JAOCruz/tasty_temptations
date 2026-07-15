"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

function FloatingImage({
  src,
  alt,
  width,
  className,
  animate = "float-slow",
}: {
  src: string
  alt: string
  width: number
  className?: string
  animate?: "float-slow" | "float-slow-reverse" | "spin-slow" | "none"
}) {
  return (
    <div
      className={`pointer-events-none absolute ${
        animate === "none" ? "" : `animate-${animate}`
      } ${className || ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        className="drop-shadow-[3px_3px_0px_#222222]"
      />
    </div>
  )
}

function TalkBox({
  children,
  className,
  color = "white",
}: {
  children: React.ReactNode
  className?: string
  color?: "white" | "green" | "yellow" | "purple" | "orange"
}) {
  const bg = {
    white: "bg-white",
    green: "bg-brand-green",
    yellow: "bg-brand-yellow",
    purple: "bg-brand-purple",
    orange: "bg-brand-orange",
  }[color]

  return (
    <Card
      className={`pointer-events-none absolute rounded-base border-2 border-border p-2 shadow-shadow ${bg} ${className || ""}`}
    >
      <span className="font-heading text-[10px] uppercase tracking-wide text-brand-black md:text-xs">
        {children}
      </span>
    </Card>
  )
}

function SvgStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={`pointer-events-none absolute ${className || ""}`}
    >
      <path d="M24 2l6 14h15l-12 9 4.5 14L24 31 10.5 39l4.5-14-12-9h15z" />
    </svg>
  )
}

function SvgCross({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      className={`pointer-events-none absolute ${className || ""}`}
    >
      <path d="M20 8v24M8 20h24" />
    </svg>
  )
}

function SvgCircle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={`pointer-events-none absolute ${className || ""}`}
    >
      <circle cx="20" cy="20" r="14" />
    </svg>
  )
}

export function NeoSparkles({
  variant,
  className,
}: {
  variant: "hero" | "menu" | "testimonials" | "how-it-works" | "faq" | "custom-orders"
  className?: string
}) {
  return null
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
        {/* Mobile-only subtle decorations */}
        <SvgStar className="left-4 top-24 size-6 text-brand-yellow md:hidden" />
        <SvgCross className="right-6 top-36 size-5 text-brand-green md:hidden" />

        {/* Desktop decorations */}
        <div className="hidden md:block">
          <FloatingImage
            src="/illustrations/decorations/star-sparkle.png"
            alt="Star sparkle"
            width={85}
            className="right-[8%] top-[16%] rotate-12"
          />
          <FloatingImage
            src="/illustrations/decorations/confetti-burst.png"
            alt="Confetti burst"
            width={100}
            className="right-[3%] top-[46%] -rotate-12"
            animate="float-slow-reverse"
          />
          <FloatingImage
            src="/illustrations/decorations/flower-bloom.png"
            alt="Flower bloom"
            width={90}
            className="bottom-[8%] right-[5%] rotate-6"
          />
          <FloatingImage
            src="/illustrations/decorations/diamond-sparkle.png"
            alt="Diamond sparkle"
            width={65}
            className="left-[5%] top-[30%] -rotate-12"
            animate="float-slow-reverse"
          />
          <FloatingImage
            src="/illustrations/decorations/arrow-curve.png"
            alt="Curved arrow"
            width={90}
            className="bottom-[22%] left-[4%] -rotate-[30deg]"
          />

          <TalkBox className="right-[7%] top-[8%] rotate-3" color="yellow">
            Sabor 5★
          </TalkBox>
          <TalkBox className="right-[3%] top-[18%] -rotate-6" color="green">
            ¡Fresco diario!
          </TalkBox>

          <SvgStar className="left-[12%] top-[20%] size-10 text-brand-yellow animate-spin-slow" />
          <SvgStar className="right-[26%] top-[40%] size-7 text-brand-purple" />
          <SvgCross className="left-[18%] bottom-[34%] size-8 text-brand-green" />
          <SvgCircle className="right-[18%] bottom-[12%] size-7 text-brand-yellow" />
        </div>
      </div>
    )
  }

  if (variant === "menu") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
        <SvgStar className="left-4 top-4 size-5 text-brand-purple md:hidden" />
        <SvgCross className="right-4 top-8 size-4 text-brand-yellow md:hidden" />

        <div className="hidden md:block">
          <FloatingImage
            src="/illustrations/decorations/diamond-sparkle.png"
            alt="Diamond sparkle"
            width={75}
            className="left-[3%] top-[10%] -rotate-12"
          />
          <FloatingImage
            src="/illustrations/decorations/star-sparkle.png"
            alt="Star sparkle"
            width={70}
            className="right-[4%] top-[8%] rotate-12"
            animate="float-slow-reverse"
          />
          <FloatingImage
            src="/illustrations/decorations/confetti-burst.png"
            alt="Confetti burst"
            width={90}
            className="bottom-[4%] right-[5%] rotate-6"
          />

          <TalkBox className="left-[5%] top-[18%] -rotate-3" color="green">
            ¡Hecho a mano!
          </TalkBox>
          <TalkBox className="right-[6%] top-[20%] rotate-3" color="purple">
            Nuevos
          </TalkBox>

          <SvgStar className="left-[8%] bottom-[16%] size-8 text-brand-purple" />
          <SvgCross className="right-[10%] top-[28%] size-7 text-brand-yellow" />
          <SvgCircle className="left-[16%] top-[32%] size-6 text-brand-green" />
        </div>
      </div>
    )
  }

  if (variant === "testimonials") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
        <SvgStar className="right-4 top-20 size-5 text-brand-yellow md:hidden" />
        <SvgCross className="left-4 bottom-24 size-4 text-white md:hidden" />

        <div className="hidden md:block">
          <FloatingImage
            src="/illustrations/decorations/flower-bloom.png"
            alt="Flower bloom"
            width={85}
            className="left-[3%] top-[10%] -rotate-12"
          />
          <FloatingImage
            src="/illustrations/decorations/star-sparkle.png"
            alt="Star sparkle"
            width={75}
            className="right-[4%] top-[12%] rotate-12"
            animate="float-slow-reverse"
          />
          <FloatingImage
            src="/illustrations/decorations/speech-bubble.png"
            alt="Speech bubble"
            width={80}
            className="bottom-[8%] left-[5%] rotate-6"
          />

          <TalkBox className="right-[5%] top-[10%] rotate-3" color="yellow">
            5★ Reviews
          </TalkBox>
          <TalkBox className="left-[8%] bottom-[8%] -rotate-6" color="white">
            ¡Me encanta!
          </TalkBox>

          <SvgStar className="left-[14%] top-[22%] size-8 text-brand-yellow animate-spin-slow" />
          <SvgStar className="right-[18%] bottom-[14%] size-7 text-brand-green" />
          <SvgCross className="right-[8%] top-[24%] size-7 text-white" />
        </div>
      </div>
    )
  }

  if (variant === "how-it-works") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
        <SvgStar className="right-6 top-24 size-5 text-brand-purple md:hidden" />
        <SvgCircle className="left-6 bottom-24 size-4 text-brand-yellow md:hidden" />

        <div className="hidden md:block">
          <FloatingImage
            src="/illustrations/decorations/arrow-curve.png"
            alt="Curved arrow"
            width={80}
            className="left-[4%] top-[22%] rotate-[140deg]"
          />
          <FloatingImage
            src="/illustrations/decorations/star-sparkle.png"
            alt="Star sparkle"
            width={70}
            className="right-[5%] bottom-[16%] rotate-12"
          />

          <TalkBox className="right-[6%] top-[20%] rotate-3" color="white">
            Fácil 1-2-3
          </TalkBox>

          <SvgStar className="left-[10%] bottom-[18%] size-8 text-brand-purple" />
          <SvgCircle className="right-[14%] top-[32%] size-6 text-brand-yellow" />
        </div>
      </div>
    )
  }

  if (variant === "faq") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className || ""}`}>
        <SvgStar className="left-4 top-16 size-5 text-brand-purple md:hidden" />
        <SvgCross className="right-4 bottom-32 size-4 text-brand-yellow md:hidden" />

        <div className="hidden md:block">
          <FloatingImage
            src="/illustrations/decorations/star-sparkle.png"
            alt="Star sparkle"
            width={80}
            className="left-[4%] top-[10%] -rotate-12"
          />
          <FloatingImage
            src="/illustrations/decorations/flower-bloom.png"
            alt="Flower bloom"
            width={90}
            className="right-[3%] top-[12%] rotate-12"
            animate="float-slow-reverse"
          />
          <FloatingImage
            src="/illustrations/decorations/confetti-burst.png"
            alt="Confetti burst"
            width={100}
            className="bottom-[6%] left-[3%] rotate-6"
          />
          <FloatingImage
            src="/illustrations/decorations/diamond-sparkle.png"
            alt="Diamond sparkle"
            width={65}
            className="bottom-[10%] right-[6%] -rotate-12"
            animate="float-slow-reverse"
          />

          <TalkBox className="left-[6%] top-[26%] rotate-3" color="green">
            ¿Preguntas?
          </TalkBox>
          <TalkBox className="bottom-[18%] right-[5%] -rotate-6" color="purple">
            ¡Tenemos respuestas!
          </TalkBox>
        </div>
      </div>
    )
  }

  return null
}
