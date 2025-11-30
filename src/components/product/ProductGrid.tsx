import { Product } from '@/types'
import ProductCard from './ProductCard'
import { ProductCardSkeleton } from '@/components/ui/Skeleton'
import { ErrorMessage } from '@/components/ui'

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
  error?: string
  onRetry?: () => void
}

export default function ProductGrid({ products, isLoading, error, onRetry }: ProductGridProps) {
  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}