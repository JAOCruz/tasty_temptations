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
import { formatPrice } from "@/lib/utils"
import { Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { NeoSparkles } from "@/components/shared/NeoSparkles"

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [adding, setAdding] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const [flavor, setFlavor] = useState<string | undefined>(
    product.flavors?.[0],
  )
  const { addItem } = useCartStore()

  const images = product.images && product.images.length > 1 ? product.images : [product.image]
  const currentImage = images[imageIndex]

  const nextImage = () => setImageIndex((i) => (i + 1) % images.length)
  const prevImage = () => setImageIndex((i) => (i - 1 + images.length) % images.length)

  const handleAdd = () => {
    setAdding(true)
    addItem(product, quantity, flavor)
    toast("¡Agregado al carrito!", {
      description: `${quantity}x ${product.name}${flavor ? ` (${flavor})` : ""}`,
    })
    setTimeout(() => setAdding(false), 300)
    setQuantity(1)
    setFlavor(product.flavors?.[0])
  }

  return (
    <Card id={`menu-item-${product.id}`} className="group relative overflow-hidden rounded-[1.25rem] border-[3px] border-border bg-white shadow-[3px_3px_0_rgba(34,34,34,0.85)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_rgba(34,34,34,0.85)]">
      <CardContent className="flex flex-col gap-4 p-4">
        {/* Image container */}
        <div className="product-pop-art relative aspect-square w-full overflow-hidden rounded-[1.25rem] border-[3px] border-border bg-brand-cream shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
          {product.comingSoon ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-brand-cream p-5 text-center">
              <span className="text-4xl">📷</span>
              <p className="font-heading text-sm leading-tight text-brand-black">
                ¡Foto próximamente! pero el sabor ya está listo para conquistarte.
              </p>
            </div>
          ) : (
            <Image
              key={currentImage}
              src={currentImage}
              alt={product.name}
              fill
              className="pop-art-img object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          {/* Category badge */}
          <div className="absolute left-3 top-3">
            <Badge className="rounded-full border-[3px] border-border bg-brand-yellow text-xs uppercase text-brand-black shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
              {product.category}
            </Badge>
          </div>
          {/* Carousel controls */}
          {!product.comingSoon && images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-white text-brand-black shadow-[2px_2px_0_#222222] transition-transform hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-white text-brand-black shadow-[2px_2px_0_#222222] transition-transform hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="size-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block h-2 w-2 rounded-full border border-brand-black ${
                      idx === imageIndex ? "bg-brand-purple" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Product info */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg leading-tight">
              <span className="mr-1">{product.emoji}</span>
              {product.name}
            </h3>
            {product.description && (
              <p className="mt-1 text-xs text-brand-black/70">
                {product.description}
              </p>
            )}
          </div>
          <span className="shrink-0 rounded-full border-[3px] border-border bg-brand-purple px-2.5 py-1 font-heading text-sm text-white shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Flavor selector */}
        {product.flavors && product.flavors.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs uppercase text-brand-black">
              Sabor
            </span>
            <div className="flex flex-wrap gap-2">
              {product.flavors.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFlavor(f)}
                  className={`rounded-full border-[3px] px-3 py-1 font-heading text-xs uppercase transition-all ${
                    flavor === f
                      ? "border-border bg-brand-green text-brand-black shadow-[2px_2px_0_rgba(34,34,34,0.85)]"
                      : "border-border bg-white hover:bg-brand-cream"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity + Add to cart */}
        <div className="mt-auto flex items-center gap-2">
          <div className="flex items-center overflow-hidden rounded-[1.25rem] border-[3px] border-border shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
            <Button
              variant="noShadow"
              size="icon"
              className="h-9 w-9 rounded-none border-0 border-r-[3px] border-border bg-secondary-background hover:bg-brand-green/30"
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
              className="h-9 w-12 rounded-none border-0 bg-white text-center font-heading text-sm [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
            <Button
              variant="noShadow"
              size="icon"
              className="h-9 w-9 rounded-none border-0 border-l-[3px] border-border bg-secondary-background hover:bg-brand-green/30"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="size-4" />
            </Button>
          </div>
          <Button
            className={`flex-1 rounded-[1.25rem] border-[3px] border-border bg-brand-green font-heading text-sm uppercase text-brand-black shadow-[3px_3px_0_rgba(34,34,34,0.85)] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-brand-green/90 hover:shadow-[5px_5px_0_rgba(34,34,34,0.85)] ${
              adding ? "animate-pop" : ""
            }`}
            onClick={handleAdd}
          >
            <ShoppingCart className="mr-1 size-4" />
            AÑADIR
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todo")

  const filteredProducts =
    activeCategory === "Todo"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="menu" className="relative overflow-hidden bg-linear-to-b/oklch from-brand-cream-2 to-red-400 via-brand-purple py-20 sm:py-28">
      <NeoSparkles variant="menu" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mx-auto inline-block rounded-[1.25rem] border-[3px] border-border bg-white p-6 shadow-[3px_3px_0_rgba(34,34,34,0.85)] sm:p-8">
            <span className="pop-art-sticker pop-art-sticker-green mb-4 inline-flex rotate-2">
              Menú fresco
            </span>
            <h2 className="mb-3 font-heading text-4xl uppercase text-brand-black sm:text-5xl lg:text-6xl">
              Nuestras Tentaciones
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-black/70">
              Hecho a mano con ingredientes de calidad, para convertir cada antojo en un momento especial ✨
            </p>
          </div>
        </div>

        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="mb-12 w-full"
        >
          <TabsList className="flex h-auto min-h-[3rem] w-full flex-wrap justify-center gap-2 rounded-[1.25rem] border-[3px] border-border bg-white p-2 shadow-[3px_3px_0_rgba(34,34,34,0.85)]">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full border-[3px] border-transparent px-4 py-2 font-heading text-sm uppercase text-foreground transition-all data-[state=active]:border-border data-[state=active]:bg-brand-green data-[state=active]:text-brand-black data-[state=active]:shadow-[3px_3px_0_rgba(34,34,34,0.85)]"
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
