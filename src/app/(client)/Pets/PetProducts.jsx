"use client";  

import React, { useState } from "react";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";

export default function PetProducts({ pets, searchTerm = "", cart = [] }) {
  const [searchQuery, setSearchQuery] = useState(searchTerm);

  const filteredProducts = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">PetShop</h1>
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product._id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = "/fallback-image.svg")}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">${product.Prix.toFixed(2)}</span>
                  <button
                    onClick={() => alert(`Product ${product.name} added to cart`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            <p className="text-2xl font-semibold mb-2">No products found</p>
            <p>Try adjusting your search to find more products.</p>
          </div>
        )}
      </main>
    </div>
  );
}
