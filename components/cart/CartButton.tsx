"use client"

import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCartStore } from "@/lib/store/cart-store"

export function CartButton() {
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
      className="relative border-2 border-border bg-white text-brand-black shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
    >
      <ShoppingCart className="size-5" />
      {count > 0 && (
        <Badge className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-border bg-brand-purple px-1 text-xs text-brand-black">
          <span className={bump ? "animate-bounce-in inline-block" : ""}>
            {count}
          </span>
        </Badge>
      )}
    </Button>
  )
}
