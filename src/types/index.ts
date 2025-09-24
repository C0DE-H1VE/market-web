// Tipos globais da aplicação

export interface User {
  id?: string
  name: string
  email: string
  isLoggedIn: boolean
  avatar?: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  inStock: boolean
}

// Adicione mais tipos conforme necessário...
