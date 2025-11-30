export interface FilterState {
  category: string
  priceRange: {
    min: number
    max: number
  }
  sortBy: 'price-asc' | 'price-desc' | 'name' | 'rating'
  searchQuery: string
}

export interface PaginationState {
  currentPage: number
  itemsPerPage: number
  totalItems: number
}