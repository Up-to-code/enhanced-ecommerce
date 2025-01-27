"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import ProductCard from "../components/ProductCard"

const products = [
  {
    id: 1,
    name: "Elegant Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Leather Bag",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
  },
  { id: 4, name: "Smartphone", price: 699.99, image: "/placeholder.svg?height=300&width=300", category: "Electronics" },
  { id: 5, name: "Running Shoes", price: 89.99, image: "/placeholder.svg?height=300&width=300", category: "Sports" },
  { id: 6, name: "Yoga Mat", price: 29.99, image: "/placeholder.svg?height=300&width=300", category: "Sports" },
  { id: 7, name: "Coffee Maker", price: 59.99, image: "/placeholder.svg?height=300&width=300", category: "Home" },
  { id: 8, name: "Desk Lamp", price: 39.99, image: "/placeholder.svg?height=300&width=300", category: "Home" },
  // Add more products as needed
]

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleSearch = (searchTerm: string) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1],
    )
    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const filtered = products.filter(
      (product) =>
        (category === "All" || product.category === category) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1],
    )
    setFilteredProducts(filtered)
  }

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    const filtered = products.filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.price >= value[0] &&
        product.price <= value[1],
    )
    setFilteredProducts(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Search</h2>
            <Input type="search" placeholder="Search products..." onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            <Select onValueChange={handleCategoryChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Accessories">Accessories</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
                <SelectItem value="Home">Home</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Price Range</h2>
            <Slider min={0} max={1000} step={10} value={priceRange} onValueChange={handlePriceChange} />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} onQuickView={() => {}}>
                <Button asChild className="w-full mt-2">
                  <Link href={`/products/${product.id}`}>View Details</Link>
                </Button>
              </ProductCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

