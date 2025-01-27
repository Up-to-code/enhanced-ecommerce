"use client";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "Summer Dress",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "Beach Hat",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Sunglasses",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Electronics", "Clothing", "Home & Garden", "Sports"].map(
            (category) => (
              <div
                key={category}
                className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                <Link
                  href={`/categories/${category.toLowerCase()}`}
                  className="text-lg font-medium hover:underline"
                >
                  {category}
                </Link>
              </div>
            )
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onQuickView={() => console.log(`Quick view for ${product.name}`)}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
