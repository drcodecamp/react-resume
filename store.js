import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ResumeStore from './src/store/resumeSlice.js' // defaults to localStorage for web

const rootReducer = combineReducers({
  ResumeStore,
})

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['AuthStore'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  enhancers: [],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([]),
})

export let persist = persistStore(store)

export default store
