'use client'

import { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { fetchProducts, fetchCategories, clearError } from '@/store/slices/productSlice'
import { ProductGrid, ProductFilter } from '@/components/product'
import PriceFilter from '@/components/product/PriceFilter'
import SearchBar from '@/components/product/SearchBar'
import ResultsCount from '@/components/product/ResultsCount'
import ActiveFilters from '@/components/product/ActiveFilters'
import { filterAndSortProducts } from '@/lib/utils'
import { getActiveFilterCount } from '@/lib/filterUtils'
import { Pagination } from '@/components/ui'
import { setCurrentPage } from '@/store/slices/filterSlice'

export default function ProductCatalog() {
  const dispatch = useAppDispatch()
  const { products, isLoading, error } = useAppSelector((state) => state.products)
  const { category, sortBy, searchQuery, priceRange, pagination } = useAppSelector((state) => state.filters)

  const filteredProducts = useMemo(() => {
    return filterAndSortProducts(products, category, sortBy, searchQuery, priceRange)
  }, [products, category, sortBy, searchQuery, priceRange])

  const paginatedProducts = useMemo(() => {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage
    const endIndex = startIndex + pagination.itemsPerPage
    return filteredProducts.slice(startIndex, endIndex)
  }, [filteredProducts, pagination.currentPage, pagination.itemsPerPage])

  const totalPages = Math.ceil(filteredProducts.length / pagination.itemsPerPage)

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
          <SearchBar />
          <ProductFilter />
          <ActiveFilters />
          <ResultsCount 
            count={filteredProducts.length}
            total={products.length}
            searchQuery={searchQuery}
            category={category}
          />
          <ProductGrid
            products={paginatedProducts}
            isLoading={isLoading}
            error={error}
            onRetry={handleRetry}
          />
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}