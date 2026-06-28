"use client"

import { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products, categories, type Product } from "@/lib/data"
import { useCartStore } from "@/lib/store/cart-store"
import { Plus, Minus, ShoppingCart } from "lucide-react"

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const { addItem } = useCartStore()

  const handleAdd = () => {
    setAdding(true)
    addItem(product, quantity)
    toast("Added to cart! 🛒", {
      description: `${quantity}x ${product.name}`,
    })
    setTimeout(() => setAdding(false), 300)
    setQuantity(1)
  }

  return (
    <Card className="group relative overflow-hidden border-2 border-border bg-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#0a0a0a]">
      <CardContent className="flex flex-col gap-4 p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-base border-2 border-border bg-brand-cream">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-base uppercase text-muted-foreground">
              {product.category}
            </p>
            <h3 className="font-heading text-lg leading-tight">
              {product.emoji} {product.name}
            </h3>
          </div>
          <Badge className="shrink-0 bg-brand-gold text-brand-black">
            ${product.price.toFixed(2)}
          </Badge>
        </div>

        <div className="mt-auto flex items-center gap-2">
          <div className="flex items-center">
            <Button
              variant="noShadow"
              size="icon"
              className="h-9 w-9 rounded-r-none border-2 border-r-0 border-border bg-secondary-background"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="size-4" />
            </Button>
            <Input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="h-9 w-14 rounded-none border-2 border-border bg-white text-center font-heading text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              variant="noShadow"
              size="icon"
              className="h-9 w-9 rounded-l-none border-2 border-l-0 border-border bg-secondary-background"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="size-4" />
            </Button>
          </div>
          <Button
            className={`flex-1 border-2 border-border bg-brand-pink font-heading text-brand-black shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none ${
              adding ? "animate-pop" : ""
            }`}
            onClick={handleAdd}
          >
            <ShoppingCart className="mr-1 size-4" />
            ADD
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="menu" className="bg-brand-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center font-heading text-4xl uppercase text-white sm:text-5xl lg:text-6xl">
          OUR MENU
        </h2>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-10 w-full"
        >
          <TabsList className="flex w-full flex-wrap justify-start gap-2 rounded-base border-2 border-border bg-secondary-background p-2 sm:justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-base border-2 border-transparent px-4 py-2 font-heading text-sm uppercase text-foreground data-[state=active]:border-border data-[state=active]:bg-brand-pink data-[state=active]:text-brand-black data-[state=active]:shadow-shadow"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
