import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGptSearch :false,
        
    },
    reducers:{
        // It is used to show Gpt Search(toggling it)
        toggleGptSearchView: (state)=>{
           state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const {toggleGptSearchView} =gptSlice.actions;
export default gptSlice.reducer;