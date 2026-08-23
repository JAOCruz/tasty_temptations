"use client"

import { useEffect, useRef } from "react"

/* Variant 1: animated linear gradient (position shift) */
export function HeroBgShift() {
  return <div className="hero-bg-shift absolute inset-0" />
}

/* Variant 2: mesh gradient — floating blurred blobs */
export function HeroBgMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-cream">
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />
    </div>
  )
}

/* Variant 3: aurora — blobs + glow that follows the cursor */
export function HeroBgAurora() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = { x: 0.7, y: 0.3 }
    const pos = { x: 0.7, y: 0.3 }
    let raf = 0
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.06
      pos.y += (target.y - pos.y) * 0.06
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.x * 100}vw, ${pos.y * 100}vh) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden bg-brand-cream">
      <div className="hero-blob hero-blob-aurora-1" />
      <div className="hero-blob hero-blob-aurora-2" />
      <div ref={glowRef} className="hero-aurora-glow" />
    </div>
  )
}
