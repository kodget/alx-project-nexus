'use client'

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts, fetchCategories, clearError } from '@/store/slices/productSlice'
import { ProductGrid } from '@/components/product'

export default function ProductCatalog() {
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector((state) => state.products)

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
      <ProductGrid
        products={products}
        isLoading={isLoading}
        error={error}
        onRetry={handleRetry}
      />
    </div>
  )
}