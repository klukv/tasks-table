import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
  tags: string;
  author: string;
  status: string;
  isFilter: boolean;
}

const initialState: filterState = {
  tags: "",
  author: "",
  status: "",
  isFilter: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addTags: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.concat(`${action.payload},`);
    },
    removeTags: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.replace(`${action.payload},`, "");
    },
    addAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    addStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setIsFilter: (state, action: PayloadAction<boolean>) => {
      state.isFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTags, removeTags, addAuthor, addStatus, setIsFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
