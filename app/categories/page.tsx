import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Electronics", image: "/placeholder.svg?height=300&width=400" },
  { name: "Clothing", image: "/placeholder.svg?height=300&width=400" },
  { name: "Home & Garden", image: "/placeholder.svg?height=300&width=400" },
  { name: "Sports", image: "/placeholder.svg?height=300&width=400" },
  { name: "Books", image: "/placeholder.svg?height=300&width=400" },
  { name: "Toys", image: "/placeholder.svg?height=300&width=400" },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={category.image || "/placeholder.svg"} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <Button asChild>
                <Link href={`/categories/${category.name.toLowerCase().replace(" & ", "-")}`}>Shop Now</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

