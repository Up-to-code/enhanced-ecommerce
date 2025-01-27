"use client"
import ProductCard from "../components/ProductCard"

const dealProducts = [
  { id: 1, name: "Summer Dress", price: 39.99, originalPrice: 59.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "Beach Hat", price: 14.99, originalPrice: 24.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Sunglasses", price: 29.99, originalPrice: 39.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Sandals", price: 19.99, originalPrice: 29.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 5, name: "Beach Towel", price: 12.99, originalPrice: 19.99, image: "/placeholder.svg?height=400&width=400" },
  { id: 6, name: "Swimsuit", price: 34.99, originalPrice: 49.99, image: "/placeholder.svg?height=400&width=400" },
]

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Hot Deals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dealProducts.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} onQuickView={() => {}} />
            <div className="mt-2">
              <span className="text-red-600 font-semibold">${product.price.toFixed(2)}</span>
              <span className="text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
