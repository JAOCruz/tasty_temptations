"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { CartItem } from "./CartItem"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, X, Truck } from "lucide-react"
import { CheckoutDialog } from "@/components/checkout/CheckoutDialog"

export function CartDrawer() {
  const { items, isOpen, closeCart, total, clearCart } = useCartStore()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const subtotal = total()

  return (
    <>
      <Drawer open={isOpen} onOpenChange={closeCart} direction="right">
        <DrawerContent className="fixed inset-y-0 right-0 z-[100] flex h-full w-full flex-col border-l-2 border-border bg-background p-0 sm:max-w-[420px]">
          <DrawerHeader className="border-b-2 border-border p-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="flex items-center gap-2 font-heading text-xl">
                <ShoppingBag className="size-6" />
                Tu Carrito
              </DrawerTitle>
              <DrawerClose asChild>
                <Button variant="noShadow" size="icon" className="border-2 border-border bg-secondary-background">
                  <X className="size-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <ShoppingBag className="size-16 text-muted-foreground" />
                <p className="font-heading text-lg">Tu carrito está vacío</p>
                <p className="text-sm text-muted-foreground">
                  ¡Agrega algunos dulces!
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>

          <DrawerFooter className="border-t-2 border-border p-4">
            {items.length > 0 && (
              <div className="rounded-base border-2 border-border bg-brand-cream p-3 shadow-shadow">
                <div className="flex items-center gap-2">
                  <Truck className="size-4 shrink-0" />
                  <span className="font-heading text-sm">
                    El costo de envío se confirma manualmente por email o WhatsApp.
                  </span>
                </div>
              </div>
            )}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-heading">{formatPrice(subtotal)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl">
                <span className="font-heading">TOTAL</span>
                <span className="font-heading text-brand-black">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>
            <Button
              className="w-full bg-brand-green text-brand-black hover:bg-brand-green/90"
              disabled={items.length === 0}
              onClick={() => {
                closeCart()
                setCheckoutOpen(true)
              }}
            >
              IR A PAGAR
            </Button>
            <Button
              variant="neutral"
              className="w-full"
              onClick={closeCart}
            >
              SEGUIR COMPRANDO
            </Button>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-center text-xs text-muted-foreground underline"
              >
                Vaciar carrito
              </button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  )
}
