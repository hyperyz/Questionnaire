import { configureStore } from "@reduxjs/toolkit";
import comsSlice from './comsSlice'
import editorSlice from "./editorSlice";

export default configureStore({
    reducer: {
        coms: comsSlice.reducer,
        editor: editorSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        { serializableCheck: false }
    ),
})