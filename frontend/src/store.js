import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import {apiSlice} from './slices/apiSlice'

const store = configureStore({
    reducer:{
        auth:authReducer,
        [apiSlice.reducerPath]:apiSlice,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware(),
    devTools: true
})

export default store