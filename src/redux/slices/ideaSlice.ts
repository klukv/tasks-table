import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAllIdeas, IChangeContent } from "../../models/main";

export interface ideaState {
  ideasList: IAllIdeas[];
  changeContent: IChangeContent;
}

const initialState: ideaState = {
  ideasList: [],
  changeContent: {
    isChangeStatus: true,
    isChangeComment: true,
  },
};

export const ideaSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    setIdeas: (state, action: PayloadAction<IAllIdeas[]>) => {
      state.ideasList = action.payload;
    },
    setChangeComment: (state, action: PayloadAction<boolean>) => {
      state.changeContent.isChangeComment = action.payload;
    },
    setChangeStatus: (state, action: PayloadAction<boolean>) => {
      state.changeContent.isChangeStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIdeas, setChangeComment, setChangeStatus } =
  ideaSlice.actions;

export default ideaSlice.reducer;
