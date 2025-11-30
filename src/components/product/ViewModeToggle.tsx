'use client'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setViewMode, resetDisplayedItems } from '@/store/slices/viewSlice'
import { setCurrentPage } from '@/store/slices/filterSlice'

export default function ViewModeToggle() {
  const dispatch = useAppDispatch()
  const { viewMode } = useAppSelector((state) => state.view)

  const handleModeChange = (mode: 'pagination' | 'infinite') => {
    dispatch(setViewMode(mode))
    dispatch(resetDisplayedItems())
    dispatch(setCurrentPage(1))
  }

  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm font-medium text-gray-700">View:</span>
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => handleModeChange('pagination')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            viewMode === 'pagination'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Pages
        </button>
        <button
          onClick={() => handleModeChange('infinite')}
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            viewMode === 'infinite'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Scroll
        </button>
      </div>
    </div>
  )
}