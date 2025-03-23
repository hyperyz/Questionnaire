import { createSlice } from "@reduxjs/toolkit";
import { defaultStatusMap } from '@/configs/defaultStatus/defaultStatusMap';

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        currentComponentIndex: -1, // 当前选中的组件索引
        count: 0, // 组件数量
        coms: [] as any[]
    },
    reducers: {
        addComponent: (state, action: any) => {
            const materialName = action.payload.materialName;
            const defaultStatus = defaultStatusMap[materialName]();
            state.coms.push(defaultStatus);
            state.count++
            state.currentComponentIndex = -1
        }
    },
});

export const { addComponent } = editorSlice.actions;

export default editorSlice;