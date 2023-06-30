import { createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "../../../api/auth";

export const isLogin = createAsyncThunk(
    'auth',
    async (data, {rejectWithValue})=>{
        try {
            const  res = await login.caseLogin(data)
            if (res.status === 200){
                return res.data
            }
        } catch (r){
            return rejectWithValue(r.response.data.error)
        }
    } 
)