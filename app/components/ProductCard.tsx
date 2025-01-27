"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  onQuickView: () => void
}

export default function ProductCard({ id, name, price, image, onQuickView }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
          <Button variant="secondary" size="icon" className="absolute top-2 right-2" onClick={onQuickView}>
            <Eye className="h-4 w-4" />
            <span className="sr-only">Quick view</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-gray-500 mt-1">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button asChild variant="outline">
          <Link href={`/products/${id}`}>View Details</Link>
        </Button>
        <Button>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

