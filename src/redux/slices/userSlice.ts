import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  id: number;
  username: string;
  email: string;
  roles: string[];
  isAuth: boolean;
};

export interface userState {
  user: User;
  allUsers: User[];
  isChangeUsers: boolean;
}

const initialState: userState = {
  user: {
    id: 0,
    username: "",
    email: "",
    roles: [],
    isAuth: false,
  },
  allUsers: [],
  isChangeUsers: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.user.isAuth = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setStateChange: (state, action) => {
      state.isChangeUsers = action.payload;
    },
    logOut: (state) => {
      state.user = {
        id: 0,
        username: "",
        email: "",
        roles: [],
        isAuth: false,
      };
      state.allUsers = [];
      state.isChangeUsers = false;
    },
  },
});

export const { saveUser, setIsAuth, setAllUsers, setStateChange, logOut } =
  userSlice.actions;

export default userSlice.reducer;
