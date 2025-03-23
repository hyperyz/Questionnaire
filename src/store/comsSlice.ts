import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
        updateStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, status } = action.payload;
            if (configKey === 'position' || configKey === 'titleSize' || configKey === 'descSize' || configKey === 'titleItalic' || configKey === 'descItalic' || configKey === 'titleWeight' || configKey === 'descWeight') {
                state.coms[state.currentMaterialCom].status[configKey].currentStatus = status;
            }
            if (configKey === 'title' || configKey === 'desc' || configKey === 'titleColor' || configKey === 'descColor' || configKey === 'options') {
                state.coms[state.currentMaterialCom].status[configKey].status = status;
            }
        }
    },
});

export const { updateStatus } = counterSlice.actions;
export default counterSlice;