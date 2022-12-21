import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import newsSlice from "./newsSlice";

export const store = configureStore({
    reducer:{
        todo:todoSlice,
        news:newsSlice     
    }
})