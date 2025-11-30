export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export type SortOption = {
  value: string
  label: string
}