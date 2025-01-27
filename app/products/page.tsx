"use client"

import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A lightweight, flowy summer dress perfect for hot days.",
  },
  {
    id: 2,
    name: "Beach Hat",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A wide-brimmed hat to protect you from the sun.",
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Stylish sunglasses with UV protection.",
  },
  {
    id: 4,
    name: "Sandals",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Comfortable sandals for beach or casual wear.",
  },
  {
    id: 5,
    name: "Beach Towel",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A large, soft towel for the beach or pool.",
  },
  {
    id: 6,
    name: "Swimsuit",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "A stylish and comfortable swimsuit for water activities.",
  },
]

export default function ProductsPage() {
  const [quickViewProduct, setQuickViewProduct] = useState<(typeof products)[0] | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} onQuickView={() => setQuickViewProduct(product)} />
        ))}
      </div>

      <Dialog open={quickViewProduct !== null} onOpenChange={() => setQuickViewProduct(null)}>
        <DialogContent>
          {quickViewProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{quickViewProduct.name}</DialogTitle>
                <DialogDescription>${quickViewProduct.price.toFixed(2)}</DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <img
                  src={quickViewProduct.image || "/placeholder.svg"}
                  alt={quickViewProduct.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <p className="mt-4">{quickViewProduct.description}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <Button onClick={() => setQuickViewProduct(null)}>Close</Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

