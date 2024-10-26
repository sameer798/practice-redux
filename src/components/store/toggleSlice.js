import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'cartToggle',
    initialState: {isOpen: false},
    reducers: {
        toggle(state){
            state.isOpen = !state.isOpen
        }
    }
})

export const {toggle} = toggleSlice.actions;
export default toggleSlice.reducer; 