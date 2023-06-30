import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk";
import authStore  from "./auth/slice/auth";
import nilaiReducer from "./nilaiStore/slice/nilai"

export const store = configureStore({
    reducer:{
        auth: persistReducer({
            key:"diya",
            storage
        },authStore),
        nilai: nilaiReducer
    },
    middleware:[thunk]
})
export const persistor = persistStore(store)
