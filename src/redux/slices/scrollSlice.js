import { createSlice } from '@reduxjs/toolkit';

//초기 스크롤 값 0
const initialState = {
  scrollPosition: 0,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    // 스크롤 값을 저장하는 함수
    setScrollPosition: (state, action) => {
      state.scrollPosition = action.payload;
    },
  },
});

export const { setScrollPosition } = scrollSlice.actions;
export default scrollSlice.reducer;