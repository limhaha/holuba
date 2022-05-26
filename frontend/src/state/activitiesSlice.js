import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
    name: 'activities',
    initialState: {
        items: [],
    },
    reducers: {
        updateActivities:(state, action)=>{
            state.items = action.payload;
        },
    }
})


export const {updateActivities} = activitiesSlice.actions;

export default activitiesSlice.reducer;

