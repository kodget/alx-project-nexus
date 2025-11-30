'use client'

import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setPriceRange } from '@/store/slices/filterSlice'

export default function PriceFilter() {
  const dispatch = useAppDispatch()
  const { priceRange } = useAppSelector((state) => state.filters)
  const [tempRange, setTempRange] = useState(priceRange)

  const handleApplyRange = () => {
    dispatch(setPriceRange(tempRange))
  }

  const handleMinChange = (value: string) => {
    const min = Math.max(0, parseFloat(value) || 0)
    setTempRange({ ...tempRange, min })
  }

  const handleMaxChange = (value: string) => {
    const max = Math.max(tempRange.min, parseFloat(value) || 1000)
    setTempRange({ ...tempRange, max })
  }

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">$</span>
            <input
              type="number"
              value={tempRange.min}
              onChange={(e) => handleMinChange(e.target.value)}
              className="w-20 border border-gray-300 rounded px-2 py-2 text-sm"
              min="0"
              placeholder="Min"
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">$</span>
            <input
              type="number"
              value={tempRange.max}
              onChange={(e) => handleMaxChange(e.target.value)}
              className="w-20 border border-gray-300 rounded px-2 py-2 text-sm"
              min={tempRange.min}
              placeholder="Max"
            />
          </div>
        </div>
        <button
          onClick={handleApplyRange}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
        >
          Apply
        </button>
      </div>
    </div>
  )
}