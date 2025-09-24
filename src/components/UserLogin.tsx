'use client'

import { useState } from 'react'
import { useUserStore } from '@/stores/atoms'

export default function UserLogin() {
  const { user, login, logout } = useUserStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    if (name && email) {
      login(name, email)
      setName('')
      setEmail('')
    }
  }

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">👤 Gerenciamento de Usuário</h3>
      
      {!user.isLoggedIn ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-md">
            <p className="text-green-800">
              <strong>Bem-vindo, {user.name}!</strong>
            </p>
            <p className="text-green-600 text-sm">{user.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
