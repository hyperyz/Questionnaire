import { configureStore } from "@reduxjs/toolkit";
import comsSlice from './comsSlice'
import editorSlice from "./editorSlice";

const store = configureStore({
    reducer: {
        coms: comsSlice.reducer,
        editor: editorSlice.reducer,
    },
})

export default store;

export type StoreRootState = ReturnType<typeof store.getState>;