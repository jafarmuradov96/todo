import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const dataSlice = createSlice({
    name: 'mainData',
    initialState,
    reducer: {
        addTodo: (state, action) => {
            state.push({
                title: action.payload.title,
                isChecked: action.payload.isChecked,
                id: Math.random().toString(),
            })
        }
    }

})

export const { addTodo } = dataSlice.actions;
export default dataSlice.reducer