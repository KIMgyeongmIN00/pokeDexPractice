import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: JSON.parse(localStorage.getItem("pokes")) || []
};

const pokeDexSlice = createSlice({
  name: "pokeDex",
  initialState,
  reducers: {
    handleAddPoke: (pokes, action) => {
      if (!pokes.value.includes(action.payload.id)) {
        if (pokes.value.length < 6) {
          const newPokes = [...pokes.value, action.payload.id];
          localStorage.setItem("pokes", JSON.stringify(newPokes));
          toast(action.payload.korean_name + "(이)가 추가 되었습니다.");
          return { ...pokes, value: newPokes }
        } else {
          alert("6개까지만 하세요!");
        }
      } else {
        alert("중복하여 고를 수 없습니다!");
      }
    },

    handleRemovePoke: (pokes, action) => {
      const deleteIds = pokes.value.filter((pokeId) => pokeId !== action.payload.id);
      localStorage.setItem(
        "pokes",
        JSON.stringify(deleteIds)
      );
      toast(action.payload.korean_name + "(이)가 삭제 되었습니다.")
      return { ...pokes, value: deleteIds }
    },
  }
});

export const { handleAddPoke, handleRemovePoke } = pokeDexSlice.actions;
export default pokeDexSlice.reducer;