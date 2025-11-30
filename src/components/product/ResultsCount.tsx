'use client'

interface ResultsCountProps {
  count: number
  total: number
  searchQuery?: string
  category?: string
}

export default function ResultsCount({ count, total, searchQuery, category }: ResultsCountProps) {
  const hasFilters = searchQuery || category

  return (
    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
      <div>
        Showing {count} of {total} products
        {hasFilters && (
          <span className="ml-2">
            {searchQuery && `for "${searchQuery}"`}
            {category && ` in ${category}`}
          </span>
        )}
      </div>
    </div>
  )
}