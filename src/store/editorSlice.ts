import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        currentComponentIndex: 0, // 当前选中的组件索引
        count: 0, // 组件数量
        coms: [defaultStatusMap["single-select"]()] as any[]
    },
    reducers: {
        addComponent: (state, action: any) => {
            const materialName = action.payload.materialName;
            const defaultStatus = defaultStatusMap[materialName]();
            state.coms.push(defaultStatus);
            state.count++
        },
        setCurrentComponentIndex: (state, action: PayloadAction<number>) => {
            state.currentComponentIndex = action.payload
        },
        updateStatus: (state: any, action: PayloadAction<any>) => {
            const { configKey, status } = action.payload;
            const selectedCom = state.coms[state.currentComponentIndex];
            if (configKey === 'position' || configKey === 'titleSize' || configKey === 'descSize' || configKey === 'titleItalic' || configKey === 'descItalic' || configKey === 'titleWeight' || configKey === 'descWeight') {
                selectedCom.status[configKey].currentStatus = status;
            }
            if (configKey === 'title' || configKey === 'desc' || configKey === 'titleColor' || configKey === 'descColor' || configKey === 'options') {
                selectedCom.status[configKey].status = status;
            }
        }

    },
});

export const { addComponent, setCurrentComponentIndex, updateStatus } = editorSlice.actions;

export default editorSlice;