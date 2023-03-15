import { createSlice } from "@reduxjs/toolkit";


const initialState = {

count:1
}
export const counterSlice=createSlice({
    name: 'count',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        incrementbyamount:(state,action)=>{
            state.count=state.count+action.payload
        }
    }
})

export const{increment,decrement,reset,incrementbyamount}=counterSlice.actions;
export default counterSlice.reducer;