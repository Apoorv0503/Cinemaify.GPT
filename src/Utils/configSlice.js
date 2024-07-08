import { createSlice } from "@reduxjs/toolkit";

//we will keep the track of currently selected language(for GPT search page) in this slice.
const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"en",
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;
        }
    }

});

export const {changeLanguage}=configSlice.actions;
export default configSlice.reducer;