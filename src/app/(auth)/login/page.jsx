"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Login submitted")

    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Connexion à PETSWAVE</h2>
            <p className="text-sm text-gray-600 mt-1">Entrez vos identifiants pour accéder à votre compte</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                          focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                            focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </form>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-2 text-sm">
          <div className="text-center">
            <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
              Mot de passe oublié ?
            </Link>
          </div>
          <div className="text-center text-gray-600">
            Pas encore de compte ?{" "}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
              S&apos;inscrire
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
