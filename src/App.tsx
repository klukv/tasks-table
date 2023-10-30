import React, { createContext, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AUTH_URL, CREATE_IDEA_URL, MAIN_URL } from "./utils/const";
import Main from "./pages/main";
import Auth from "./pages/auth";
import Header from "./components/header";
import Create_Task from "./pages/create-task";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

type TPopupContext = {
  activePopup: boolean;
  typeModal: string;
  setActivePopup: (value: boolean) => void;
  setTypeModal: (value: string) => void;
};

const dvContextPopup = {
  activePopup: false,
  typeModal: "",
  setActivePopup: () => false,
  setTypeModal: () => "",
};

export const PopupContext = createContext<TPopupContext>(dvContextPopup);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<string>("");
  const isAuthUser = useSelector(
    (state: RootState) => state.userSlice.user.isAuth
  );

  useEffect(() => {
    if (!isAuthUser) {
      navigate(AUTH_URL);
    }
  }, [isAuthUser]);

  return (
    <div className="wrapper">
      <PopupContext.Provider
        value={{ activePopup, typeModal, setActivePopup, setTypeModal }}
      >
        {!location.pathname.includes("signin") ? <Header /> : ""}
        <Routes>
          {isAuthUser ? (
            <>
              <Route path={MAIN_URL} element={<Main />} />
              <Route path={CREATE_IDEA_URL} element={<Create_Task />} />
            </>
          ) : (
            <Route key="login-key" path="*" element={<Auth />} />
          )}
        </Routes>
      </PopupContext.Provider>
    </div>
  );
}

export default App;
