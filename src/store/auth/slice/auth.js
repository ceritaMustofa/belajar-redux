import { createSlice } from "@reduxjs/toolkit";
import { isLogin } from "../action/auth";

export const authStore = createSlice({
    name:"auth",
    initialState: {
        token:"",
        loadingAuth: false,
        msg:"",
    },
    reducers:{
        clearState:(state)=>{
            state.token=""
        },
        
    },
    extraReducers: builder => {
        builder
        .addCase(isLogin.pending,(state)=>{
            state.loadingAuth=true
        })
        .addCase(isLogin.fulfilled,(state, action)=>{
            state.loadingAuth=false
            state.token=action.payload.token
        })
        .addCase(isLogin.rejected,(state, action)=>{
            state.loadingAuth=false
            state.msg=action.payload
        })
    }
})
export const authAction = authStore.actions
export default authStore.reducer