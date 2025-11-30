import { Product } from '@/types'

export function filterAndSortProducts(
  products: Product[],
  category: string,
  sortBy: string,
  searchQuery: string,
  priceRange: { min: number; max: number }
): Product[] {
  if (!products.length) return []

  let filtered = products.filter((product) => {
    // Apply all filters in a single pass for better performance
    const matchesCategory = !category || product.category === category
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
    const matchesSearch = !searchQuery || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesPrice && matchesSearch
  })

  // Sort products
  filtered.sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating':
        return b.rating.rate - a.rating.rate
      case 'name':
      default:
        return a.title.localeCompare(b.title)
    }
  })

  return filtered
}