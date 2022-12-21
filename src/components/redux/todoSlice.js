import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo :[]
}

const todoSlice = createSlice({
 name:"todo",
 initialState,
 reducers:{
    submit:(state, action)=>{
state.todo = [...state.todo, action.payload.todo]
    },
    deleteArray:(state, action)=>{
        console.log(action.payload)
        state.todo.splice(action.payload.index, 1)
    }
 }
})

export const {submit, deleteArray} = todoSlice.actions
export default todoSlice.reducer

