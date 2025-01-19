import { configureStore } from "@reduxjs/toolkit";

import charactersReducer from "../features/characterSlice";

export const store = configureStore({
    reducer: {
        charactersData: charactersReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;