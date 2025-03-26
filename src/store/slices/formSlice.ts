import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
    breed: string;
    subBreed: string;
    number: string;
    imageResults: number;
    error: boolean
}

const initialState: FormState = {
    breed: "all",
    subBreed: "all",
    number: "1",
    imageResults: 0,
    error: false
}

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setBreed: (state, action: PayloadAction<string>) => {
            state.breed = action.payload
        },
        setSubBreed: (state, action: PayloadAction<string>) => {
            state.subBreed = action.payload
        },
        setNumber: (state, action: PayloadAction<string>) => {
            state.number = action.payload
        },
        setImageResults: (state, action: PayloadAction<number>) => {
            state.imageResults = action.payload
        },
        setError: (state, action: PayloadAction<boolean>) => {
            state.error = action.payload
        },
        resetBreedState: () => {
            return initialState;
        }
    }
})

export default formSlice.reducer;