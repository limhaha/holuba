import { createSlice } from "@reduxjs/toolkit";
import { getMyInfo } from "api/user";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        info:{
            userId: -1,
            email: "",
            walletAddress: "",
            nickname: "",
            profileImageUrl: "",
            bio: ""
        },
        loading: false,
        error: null,
    },
    reducers: {
        updateUserInfo: (state, action)=>{
            state.info = action.payload;
            // getMyInfo((res)=>{
            //     state.info = res.data;
            // });
        },
        
        // changeTabIndex: (state, action)=>{
        //     state.data = action.payload;
        // },
    }
});


export const {updateUserInfo} = userSlice.actions;

export default userSlice.reducer;