import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              MyShop is your one-stop destination for all your shopping needs. We offer a wide range of high-quality
              products at competitive prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-gray-800">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-gray-800">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/electronics" className="text-gray-600 hover:text-gray-800">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/categories/clothing" className="text-gray-600 hover:text-gray-800">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/categories/home-and-garden" className="text-gray-600 hover:text-gray-800">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/categories/sports" className="text-gray-600 hover:text-gray-800">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 MyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

