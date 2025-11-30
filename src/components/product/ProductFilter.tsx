'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setCategory, setSortBy, resetFilters } from '@/store/slices/filterSlice'

export default function ProductFilter() {
  const dispatch = useAppDispatch()
  const { categories } = useAppSelector((state) => state.products)
  const { category, sortBy } = useAppSelector((state) => state.filters)

  const handleCategoryChange = (selectedCategory: string) => {
    dispatch(setCategory(selectedCategory))
  }

  const handleSortChange = (sortOption: string) => {
    dispatch(setSortBy(sortOption as any))
  }

  const handleReset = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Category:</label>
          <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm w-full sm:w-auto"
          >
            <option value="name">Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors w-full sm:w-auto"
        >
          Reset
        </button>
      </div>
    </div>
  )
}