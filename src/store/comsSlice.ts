import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";

const counterSlice = createSlice({
    name: "coms",
    initialState: {
        "currentCom": "single-select",
        "coms": {
            "single-select": defaultStatusMap["single-select"](),
            "single-pic-select": defaultStatusMap["single-pic-select"](),
            "multi-select": defaultStatusMap["multi-select"](),
            "multi-pic-select": defaultStatusMap["multi-pic-select"](),
        }
    },
    reducers: {
        updateCurrentCom: (state: any, action: PayloadAction<string>) => {
            let currentComName = action.payload;
            state.currentCom = currentComName;
        },
        updateStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, status } = action.payload;
            if (configKey === 'position' || configKey === 'titleSize' || configKey === 'descSize' || configKey === 'titleItalic' || configKey === 'descItalic' || configKey === 'titleWeight' || configKey === 'descWeight') {
                state.coms[state.currentCom].status[configKey].currentStatus = status;
            }
            if (configKey === 'title' || configKey === 'desc' || configKey === 'titleColor' || configKey === 'descColor' || configKey === 'options') {
                state.coms[state.currentCom].status[configKey].status = status;
            }
        }
    },
});

export const { updateCurrentCom, updateStatus } = counterSlice.actions;
export default counterSlice;