import { createSlice } from "@reduxjs/toolkit";



const movieSlice=createSlice({
    name:'movies',
    initialState:{
        addNowPlaying:null,
        addTrailerVideo:null,
    },
    reducers:{
        addMovie:(state,action)=>{
           state.addNowPlaying=action.payload;
        },
        addTrailer:(state,action)=>{
            state.addTrailerVideo=action.payload;
        }
    }
})


export const{addMovie,addTrailer}=movieSlice.actions;
 export default movieSlice.reducer;