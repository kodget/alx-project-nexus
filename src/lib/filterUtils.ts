import { Product } from '@/types'

export function getFilterStats(products: Product[]) {
  const priceRange = products.reduce(
    (acc, product) => ({
      min: Math.min(acc.min, product.price),
      max: Math.max(acc.max, product.price),
    }),
    { min: Infinity, max: 0 }
  )

  const categories = [...new Set(products.map(p => p.category))]
  
  return {
    priceRange: {
      min: Math.floor(priceRange.min),
      max: Math.ceil(priceRange.max),
    },
    categories,
    totalProducts: products.length,
  }
}

export function getActiveFilterCount(filters: {
  category: string
  searchQuery: string
  priceRange: { min: number; max: number }
}) {
  let count = 0
  if (filters.category) count++
  if (filters.searchQuery) count++
  if (filters.priceRange.min > 0 || filters.priceRange.max < 1000) count++
  return count
}