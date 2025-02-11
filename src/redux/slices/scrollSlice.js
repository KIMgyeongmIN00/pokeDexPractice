import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scrollPosition: 0,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;