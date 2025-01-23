import React from "react"
import Link from "next/link"
import { ShoppingCart, Menu, Search } from "lucide-react"

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            PetShop
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600">
            Products
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-blue-600">
            Categories
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-blue-600">
            <Search size={20} />
          </button>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            <ShoppingCart size={20} />
          </Link>
          <button className="md:hidden text-gray-700 hover:text-blue-600">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

