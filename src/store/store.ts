import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice"

export const store = configureStore({
    reducer: {
        form: formReducer
    },
});

// Tipagem da Store e Dispatch
export type RootState = ReturnType<typeof store.getState>; // Tipo do estado global
export type AppDispatch = typeof store.dispatch; // Tipo do dispatch