import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import filterReducer from './slices/filterSlice'
import viewReducer from './slices/viewSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    filters: filterReducer,
    view: viewReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch