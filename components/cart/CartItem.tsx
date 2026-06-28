"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore, CartItem as CartItemType } from "@/lib/store/cart-store"

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex items-center gap-3 rounded-base border-2 border-border bg-white p-3 shadow-shadow">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-base border-2 border-border bg-cream">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-contain p-1"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2">
          <span className="font-heading text-sm leading-tight">
            {item.product.name}
          </span>
          <span className="font-heading text-sm text-brand-gold">
            ${(item.product.price * item.quantity).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="noShadow"
              size="icon"
              className="h-7 w-7 border-2 border-border bg-secondary-background"
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            >
              <Minus className="size-3" />
            </Button>
            <span className="w-8 text-center font-heading text-sm">
              {item.quantity}
            </span>
            <Button
              variant="noShadow"
              size="icon"
              className="h-7 w-7 border-2 border-border bg-secondary-background"
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
            >
              <Plus className="size-3" />
            </Button>
          </div>
          <Button
            variant="noShadow"
            size="icon"
            className="h-7 w-7 border-2 border-border bg-brand-pink text-brand-black"
            onClick={() => removeItem(item.product.id)}
          >
            <Trash2 className="size-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
