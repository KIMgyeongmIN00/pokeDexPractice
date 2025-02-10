import { configureStore } from "@reduxjs/toolkit";
import pokeDexSlice from "../slices/pokeDexSlice"

const store = configureStore({
  reducer: {
    pokeDex: pokeDexSlice,
  }
})

export default store;