import { createSlice } from "@reduxjs/toolkit";

export const tabIndexSlice = createSlice({
    name: 'tabIndex',
    initialState: {
        value: 0,
    },
    reducers: {
        changeTabIndex: (state, action)=>{
            state.value = action.payload;
        },
    }
});

export const {changeTabIndex} = tabIndexSlice.actions;

export default tabIndexSlice.reducer;