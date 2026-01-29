import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from './cartSlice';
import { persistReducer } from 'redux-persist';
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: 'ShoppyGlobe',
    storage,
}

const rootReducer = combineReducers({
    cart: cartSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necessary to avoid errors with redux-persist
    }),
})

export const persistor = persistStore(store)

export default store
