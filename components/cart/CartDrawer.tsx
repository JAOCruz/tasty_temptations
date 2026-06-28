"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store/cart-store"
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
import { ShoppingBag, X } from "lucide-react"
import { CheckoutDialog } from "@/components/checkout/CheckoutDialog"

export function CartDrawer() {
  const { items, isOpen, closeCart, total, clearCart } = useCartStore()
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const subtotal = total()
  const deliveryFee = subtotal >= 25 || subtotal === 0 ? 0 : 3.99
  const cartTotal = subtotal + deliveryFee

  return (
    <>
      <Drawer open={isOpen} onOpenChange={closeCart} direction="right">
        <DrawerContent className="fixed inset-y-0 right-0 z-[100] flex h-full w-full flex-col border-l-2 border-border bg-background p-0 sm:max-w-[420px]">
          <DrawerHeader className="border-b-2 border-border p-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="flex items-center gap-2 font-heading text-xl">
                <ShoppingBag className="size-6" />
                Your Cart
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
                <p className="font-heading text-lg">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add some tasty treats!
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
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-heading">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery</span>
                <span className="font-heading">
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl">
                <span className="font-heading">TOTAL</span>
                <span className="font-heading text-brand-gold">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              className="w-full bg-brand-lime text-brand-black hover:bg-brand-lime/90"
              disabled={items.length === 0}
              onClick={() => {
                closeCart()
                setCheckoutOpen(true)
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
            <Button
              variant="neutral"
              className="w-full"
              onClick={closeCart}
            >
              CONTINUE SHOPPING
            </Button>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-center text-xs text-muted-foreground underline"
              >
                Clear cart
              </button>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  )
}
