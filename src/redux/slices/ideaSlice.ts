import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAllIdeas, IIdea } from "../../models/main";

export interface ideaState {
  ideasList: IAllIdeas[];
}

const initialState: ideaState = {
  ideasList: [],
};

export const ideaSlice = createSlice({
  name: "ideas",
  initialState,
  reducers: {
    setIdeas: (state, action: PayloadAction<IAllIdeas[]>) => {
      state.ideasList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIdeas } = ideaSlice.actions;

export default ideaSlice.reducer;
