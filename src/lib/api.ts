import { Product } from '@/types'

const API_BASE_URL = 'https://fakestoreapi.com'

export const api = {
  async getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return response.json()
  },

  async getCategories(): Promise<string[]> {
    const response = await fetch(`${API_BASE_URL}/products/categories`)
    if (!response.ok) {
      throw new Error('Failed to fetch categories')
    }
    return response.json()
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`)
    if (!response.ok) {
      throw new Error('Failed to fetch products by category')
    }
    return response.json()
  },
}