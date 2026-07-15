"use client"

import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store/cart-store"

export function FloatingCartButton() {
  const { toggleCart, itemCount } = useCartStore()
  const [bump, setBump] = useState(false)
  const count = itemCount()

  useEffect(() => {
    if (count === 0) return
    setBump(true)
    const timer = setTimeout(() => setBump(false), 300)
    return () => clearTimeout(timer)
  }, [count])

  return (
    <Button
      variant="noShadow"
      size="icon"
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full border-2 border-border bg-brand-purple text-brand-black shadow-[4px_4px_0px_#222222] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#222222] md:hidden"
    >
      <ShoppingCart className="size-6" />
      {count > 0 && (
        <Badge className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-border bg-white px-1 text-xs text-brand-black">
          <span className={bump ? "animate-bounce-in inline-block" : ""}>
            {count}
          </span>
        </Badge>
      )}
    </Button>
  )
}
