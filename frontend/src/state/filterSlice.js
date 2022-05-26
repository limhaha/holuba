import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        info:{
            status: "",
            currency: "USD",
            from: "",
            to: "",
            msg: "",
            sort: "",
        }
    },
    reducers: {
        initialize: (state, action)=>{
            state.info = {
                status: "",
                currency: "USD",
                from: "",
                to: "",
                msg: "",
                sort: "",
            }
        },
        changeStatus: (state, action) =>{
            state.info.status = action.payload;
        },
        changeCurrency: (state, action) =>{
            state.info.currency = action.payload;
        },
        changeFrom: (state, action) =>{
            state.info.from = action.payload;
        },
        changeTo: (state, action) =>{
            state.info.to = action.payload;
        },
        changeMsg: (state, action) =>{
            state.info.msg = action.payload;
        },
        changeSort: (state, action) =>{
            state.info.sort = action.payload;
        },
    }
})

export const{changeStatus,changeCurrency,changeFrom,changeTo,changeMsg,changeSort,initialize} = filterSlice.actions;
export default filterSlice.reducer;