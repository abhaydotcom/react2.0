import {createSlice} from '@reduxjs/toolkit'

const initialState={
    status  : false,
    useData : null
}

const AuthSlice= createSlice({
    name         : "auth",
    initialState,
    reducers     : {
        login    : (state,action)=>{
            state.status  = true;
            state.useData = action.payload.useData;
        },
        logout   : (state)=>{
            state.status  = false;
            state.useData = null;
        }
    }
})

export const {login,logout}=AuthSlice.actions;

export default AuthSlice.reducer;
