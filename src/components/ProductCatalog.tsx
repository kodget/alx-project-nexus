'use client'

import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts, fetchCategories, clearError } from '@/store/slices/productSlice'
import { ProductGrid, ProductFilter } from '@/components/product'
import { filterAndSortProducts } from '@/lib/utils'

export default function ProductCatalog() {
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector((state) => state.products)
  const { category, sortBy, searchQuery } = useAppSelector((state) => state.filters)

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, category, sortBy, searchQuery)
  }, [products, category, sortBy, searchQuery])

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
      <ProductFilter />
      <ProductGrid
        products={filteredProducts}
        isLoading={isLoading}
        error={error}
        onRetry={handleRetry}
      />
    </div>
  )
}