'use client'

import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts, fetchCategories, clearError } from '@/store/slices/productSlice'
import { ProductGrid, ProductFilter } from '@/components/product'
import PriceFilter from '@/components/product/PriceFilter'
import { filterAndSortProducts } from '@/lib/utils'

export default function ProductCatalog() {
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector((state) => state.products)
  const { category, sortBy, searchQuery, priceRange } = useAppSelector((state) => state.filters)

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, category, sortBy, searchQuery, priceRange)
  }, [products, category, sortBy, searchQuery, priceRange])

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  const handleRetry = () => {
    dispatch(clearError())
    dispatch(fetchProducts())
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        E-Commerce Product Catalog
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-64">
          <PriceFilter />
        </div>
        <div className="flex-1">
          <ProductFilter />
          <ProductGrid
            products={filteredProducts}
            isLoading={isLoading}
            error={error}
            onRetry={handleRetry}
          />
        </div>
      </div>
    </div>
  )
}