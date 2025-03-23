import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
const editorSlice = createSlice({
    name: "editor",
    initialState: {
        
    },
    reducers: {
        
    },
});

export const {  } = editorSlice.actions;

const store = configureStore({
    reducer: editorSlice.reducer,
});

export default editorSlice;