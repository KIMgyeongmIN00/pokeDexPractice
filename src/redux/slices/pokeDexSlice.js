import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("pokes")) || []
};

const pokeDexSlice = createSlice({
  name: "pokeDex",
  initialState,
  reducers: {
    handleAddPoke: (pokes, action) => {
      if (!pokes.value.includes(action.payload)) {
        if (pokes.value.length < 6) {
          const newPokes = [...pokes.value, action.payload];
          localStorage.setItem("pokes", JSON.stringify(newPokes));
          return { ...pokes, value: newPokes }
        } else {
          alert("6개까지만 하세요!");
        }
      } else {
        alert("중복하여 고를 수 없습니다!");
      }
    },

    handleRemovePoke: (pokes, action) => {
      const deleteIds = pokes.value.filter((pokeId) => pokeId !== action.payload);
      localStorage.setItem(
        "pokes",
        JSON.stringify(deleteIds)
      );
      return { ...pokes, value: deleteIds }
    },
  }
});

export const { handleAddPoke, handleRemovePoke } = pokeDexSlice.actions;
export default pokeDexSlice.reducer;