import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ViewState {
  viewMode: 'pagination' | 'infinite'
  displayedItems: number
}

const initialState: ViewState = {
  viewMode: 'pagination',
  displayedItems: 12,
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<'pagination' | 'infinite'>) => {
      state.viewMode = action.payload
      state.displayedItems = 12 // Reset when switching modes
    },
    loadMoreItems: (state) => {
      state.displayedItems += 12
    },
    resetDisplayedItems: (state) => {
      state.displayedItems = 12
    },
  },
})

export const { setViewMode, loadMoreItems, resetDisplayedItems } = viewSlice.actions
export default viewSlice.reducer