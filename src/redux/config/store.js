import { configureStore } from "@reduxjs/toolkit";
import pokeDexSlice from "../slices/pokeDexSlice"
import toastSlice from "../slices/toastSlice"

const store = configureStore({
  reducer: {
    pokeDex: pokeDexSlice,
    toast: toastSlice
  }
})

export default store;