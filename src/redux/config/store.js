import { configureStore } from "@reduxjs/toolkit";
import pokeDexSlice from "../slices/pokeDexSlice"
import scrollSlice from "../slices/scrollSlice"

const store = configureStore({
  reducer: {
    pokeDex: pokeDexSlice,
    scroll: scrollSlice,
  }
})

export default store;