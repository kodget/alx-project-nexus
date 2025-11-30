'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCategory, setPriceRange, setSearchQuery, resetFilters } from '@/store/slices/filterSlice'

export default function ActiveFilters() {
  const dispatch = useAppDispatch()
  const { category, priceRange, searchQuery } = useAppSelector((state) => state.filters)

  const hasActiveFilters = category || searchQuery || priceRange.min > 0 || priceRange.max < 1000

  if (!hasActiveFilters) return null

  const removeCategory = () => dispatch(setCategory(''))
  const removeSearch = () => dispatch(setSearchQuery(''))
  const removePriceRange = () => dispatch(setPriceRange({ min: 0, max: 1000 }))
  const clearAll = () => dispatch(resetFilters())

  return (
    <div className="bg-gray-50 p-3 rounded-lg mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Active Filters:</span>
        <button
          onClick={clearAll}
          className="text-xs text-blue-600 hover:text-blue-800 underline"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {category && (
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            Category: {category}
            <button onClick={removeCategory} className="hover:text-blue-900">×</button>
          </span>
        )}
        {searchQuery && (
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
            Search: "{searchQuery}"
            <button onClick={removeSearch} className="hover:text-green-900">×</button>
          </span>
        )}
        {(priceRange.min > 0 || priceRange.max < 1000) && (
          <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
            Price: ${priceRange.min} - ${priceRange.max}
            <button onClick={removePriceRange} className="hover:text-purple-900">×</button>
          </span>
        )}
      </div>
    </div>
  )
}