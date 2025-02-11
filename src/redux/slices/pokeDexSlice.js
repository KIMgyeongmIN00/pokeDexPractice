import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

// 기본 값을 로컬스토리지에 값이 있으면 그대로 놔두고 아니라면 빈 배열 할당
const initialState = {
  value: JSON.parse(localStorage.getItem("pokes")) || []
};

const pokeDexSlice = createSlice({
  name: "pokeDex",
  initialState,
  reducers: {
    // 대쉬보드에 추가할 포켓몬 카드의 id 값을 추가하는 핸들러
    handleAddPoke: (pokes, action) => {
      if (!pokes.value.includes(action.payload.id)) { // 전달 받은 값의 id가 이미 저장되어 있는지 확인
        if (pokes.value.length < 6) { // 이미 저장된 값이 6개 미만인지 확인하고 값 저장
          const newPokes = [...pokes.value, action.payload.id]; // 저장된 배열에 추가 id값 밀어넣기
          localStorage.setItem("pokes", JSON.stringify(newPokes)); // 로컬스토리지에 저장값 전달
          toast.success(`${action.payload.korean_name}(이)가 추가 되었습니다.`); // 저장 완료 알람
          return { ...pokes, value: newPokes } // return 해주어 리렌더링 유도
        } else { // 이미 저장된 값이 6개가 넘었다면
          Swal.fire({
            title: "잠깐만요!",
            text: "6개까지만 고를 수 있습니다.",
            icon: "error",
            confirmButtonText: "확인",
            confirmButtonColor: "#ff6b6b",
          });
        }
      } else { // 전달 받은 값의 id가 이미 저장되어 있다면
        Swal.fire({
          title: "잠깐만요!",
          text: "중복 선택은 안됩니다.",
          icon: "error",
          confirmButtonText: "확인",
          confirmButtonColor: "#ff6b6b",
        });
      }
    },

    //대쉬보드에서 삭제할 포켓몬 카드의 id 값을 제거하는 핸들러
    handleRemovePoke: (pokes, action) => {
      const deleteIds = pokes.value.filter((pokeId) => pokeId !== action.payload.id); // 값을 filter를 통해 새로운 배열로 저장
      localStorage.setItem(
        "pokes",
        JSON.stringify(deleteIds) // 전달된 id값이 삭제되어있는 배열 로컬스토리지에 저장
      );
      toast.warning(`${action.payload.korean_name}(이)가 삭제 되었습니다.`) // 삭제 완료 알람
      return { ...pokes, value: deleteIds } // return 해주어 리렌더링 유도
    },
  }
});

export const { handleAddPoke, handleRemovePoke } = pokeDexSlice.actions;
export default pokeDexSlice.reducer;