import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./redux/dataSlice";

export const store = configureStore({
    reducer: {
        mainData: dataReducer,
    }
})

export default store