import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
loading:'false',
newss: [],
error:''
}

export const fetchNews = createAsyncThunk('news/fetchNews', ()=>{
    return axios
    .get( "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4db7243dfd0543398753e4fcbd8e9331")
    .then((response)=>response.data)
})

 const newsSlice = createSlice({
name:'news',
initialState,
extraReducers:(builder)=>{
    builder.addCase(fetchNews.pending, (state, action)=>{
        state.loading = true
    })

    builder.addCase(fetchNews.fulfilled, (state, action)=>{
        state.loading = false
        state.news = action.payload
        state.error = ''
    })

    builder.addCase(fetchNews.rejected, (state, action)=>{
        state.loading = false
        state.news = []
        state.error = action.error.message
    })
}
})

export default newsSlice.reducer

