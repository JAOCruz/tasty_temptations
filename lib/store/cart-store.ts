import { create } from "zustand"
import { persist } from "zustand/middleware"
import { Product } from "@/lib/data"

export type CartItem = {
  product: Product
  quantity: number
  flavor?: string
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, quantity: number, flavor?: string) => void
  removeItem: (productId: number, flavor?: string) => void
  updateQuantity: (productId: number, quantity: number, flavor?: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  total: () => number
  itemCount: () => number
}

const itemMatches = (item: CartItem, productId: number, flavor?: string) =>
  item.product.id === productId && item.flavor === flavor

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity, flavor) => {
        set((state) => {
          const existing = state.items.find((item) =>
            itemMatches(item, product.id, flavor),
          )
          if (existing) {
            return {
              items: state.items.map((item) =>
                itemMatches(item, product.id, flavor)
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            }
          }
          return { items: [...state.items, { product, quantity, flavor }] }
        })
        get().openCart()
      },

      removeItem: (productId, flavor) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !itemMatches(item, productId, flavor),
          ),
        }))
      },

      updateQuantity: (productId, quantity, flavor) => {
        if (quantity <= 0) {
          get().removeItem(productId, flavor)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            itemMatches(item, productId, flavor) ? { ...item, quantity } : item,
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      total: () =>
        get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0,
        ),

      itemCount: () =>
        get().items.reduce((count, item) => count + item.quantity, 0),
    }),
    {
      name: "tasty-temptations-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
)
