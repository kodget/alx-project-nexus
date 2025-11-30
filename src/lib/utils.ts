import { Product } from '@/types'

export function filterAndSortProducts(
  products: Product[],
  category: string,
  sortBy: string,
  searchQuery: string,
  priceRange: { min: number; max: number }
): Product[] {
  let filtered = [...products]

  // Filter by category
  if (category) {
    filtered = filtered.filter((product) => product.category === category)
  }

  // Filter by price range
  filtered = filtered.filter((product) => 
    product.price >= priceRange.min && product.price <= priceRange.max
  )

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase()
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }

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