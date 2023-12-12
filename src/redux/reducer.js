import { createSlice } from "@reduxjs/toolkit";
import { foodList } from "../assets/data";

const initState = {
    list: foodList,
    total: []
}

const listSlice = createSlice({
    name:"list",
    initialState: initState,
    reducers:{
        add: (state, action)=>{
            state.total.push(state.list[action.payload]) // action.text
        },
    }
})

export const listAction = listSlice.actions;
export const listReducer = listSlice.reducer;
export const listSelector = (state)=>state.listReducer.total;