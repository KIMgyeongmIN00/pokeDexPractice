import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
          toast.success(`${action.payload.korean_name}(이)가 추가 되었습니다.`);
          return { ...pokes, value: newPokes }
        } else {
          Swal.fire({
            title: "잠깐만요!",
            text: "6개까지만 고를 수 있습니다.",
            icon: "error",
            confirmButtonText: "확인",
            confirmButtonColor: "#ff6b6b",
          });
        }
      } else {
        Swal.fire({
          title: "잠깐만요!",
          text: "중복 선택은 안됩니다.",
          icon: "error",
          confirmButtonText: "확인",
          confirmButtonColor: "#ff6b6b",
        });
      }
    },

    handleRemovePoke: (pokes, action) => {
      const deleteIds = pokes.value.filter((pokeId) => pokeId !== action.payload.id);
      localStorage.setItem(
        "pokes",
        JSON.stringify(deleteIds)
      );
      toast.warning(`${action.payload.korean_name}(이)가 삭제 되었습니다.`)
      return { ...pokes, value: deleteIds }
    },
  }
});

export const { handleAddPoke, handleRemovePoke } = pokeDexSlice.actions;
export default pokeDexSlice.reducer;