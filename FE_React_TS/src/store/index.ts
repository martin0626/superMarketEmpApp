import { configureStore } from '@reduxjs/toolkit'
import { productReducer, productsSlice } from './productsSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateT = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;