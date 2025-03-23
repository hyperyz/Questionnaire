import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
const counterSlice = createSlice({
    name: "coms",
    initialState: {
        "currentMaterialCom": "single-select",
        "coms": {
            "single-select": defaultStatusMap["single-select"](),
        }
        // "multi-select": defaultStatusMap["multi-select"],
    },
    reducers: {
        updateTextStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, text } = action.payload;
            state.coms[state.currentMaterialCom].status[configKey].status = text;
        },
        updateArrayStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, arr } = action.payload;
            state.coms[state.currentMaterialCom].status[configKey].status = arr;
        },
        updateStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, status } = action.payload;
            if (configKey === 'position' || configKey === 'titleSize' || configKey === 'descSize' || configKey === 'titleItalic' || configKey === 'descItalic' || configKey === 'titleWeight' || configKey === 'descWeight') {
                state.coms[state.currentMaterialCom].status[configKey].currentStatus = status;
            }
            if (configKey === 'titleColor' || configKey === 'descColor') {
                state.coms[state.currentMaterialCom].status[configKey].status = status;
            }
        }
    },
});

export const { updateTextStatus, updateArrayStatus, updateStatus } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;