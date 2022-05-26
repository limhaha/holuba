import { createSlice } from "@reduxjs/toolkit";

export const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        items: [],
    },
    reducers: {
        updateItems:(state, action)=>{
            state.items = action.payload;
        },
    }
})


export const {updateItems} = assetsSlice.actions;

export default assetsSlice.reducer;

// export const tabIndexSlice = createSlice({
//     name: 'tabIndex',
//     initialState: {
//         value: 0,
//     },
//     reducers: {
//         changeTabIndex: (state, action)=>{
//             state.value = action.payload;
//         },
//     }
// });

// export const {changeTabIndex} = tabIndexSlice.actions;

// export default tabIndexSlice.reducer;