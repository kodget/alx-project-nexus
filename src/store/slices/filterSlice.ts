import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterState, PaginationState } from '@/types'

interface FilterSliceState extends FilterState {
  pagination: PaginationState
}

const initialState: FilterSliceState = {
  category: '',
  priceRange: {
    min: 0,
    max: 1000,
  },
  sortBy: 'name',
  searchQuery: '',
  pagination: {
    currentPage: 1,
    itemsPerPage: 12,
    totalItems: 0,
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
      state.pagination.currentPage = 1
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload
      state.pagination.currentPage = 1
    },
    setSortBy: (state, action: PayloadAction<FilterState['sortBy']>) => {
      state.sortBy = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
      state.pagination.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.pagination.totalItems = action.payload
    },
    resetFilters: (state) => {
      state.category = ''
      state.priceRange = { min: 0, max: 1000 }
      state.sortBy = 'name'
      state.searchQuery = ''
      state.pagination.currentPage = 1
    },
  },
})

export const {
  setCategory,
  setPriceRange,
  setSortBy,
  setSearchQuery,
  setCurrentPage,
  setTotalItems,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer