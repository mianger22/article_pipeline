import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slice_data_articles from './slice_data_articles';
import slice_authenticated from './slice_authenticated';

const rootReducer = combineReducers({
  authenticated: slice_authenticated,
  data_articles: slice_data_articles
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']