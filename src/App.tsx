import { Routes, Route, useLocation } from "react-router-dom";
import { AUTH_URL, MAIN_URL } from "./utils/const";
import Main from "./pages/main";
import Auth from "./pages/auth";
import Header from "./components/header";

function App() {
  const location = useLocation();
  
  return (
    <div className="wrapper">
      {!location.pathname.includes("signin") ? <Header /> : ""}
      <Routes>
        <Route path={MAIN_URL} element={<Main />} />
        <Route path={AUTH_URL} element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
