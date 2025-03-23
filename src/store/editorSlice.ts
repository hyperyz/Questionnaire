import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        currentComponentIndex: -1, // 当前选中的组件索引
        count: 0, // 组件数量
        coms: []
    },
    reducers: {
        addComponent: (state, action: any) => {
            state.coms.push(action.payload);
            state.count++
            state.currentComponentIndex = -1
        }
    },
});

export const { } = editorSlice.actions;

export default editorSlice;