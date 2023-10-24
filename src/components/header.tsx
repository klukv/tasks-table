import React from "react";
import logo from "../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const clickLink = (route: string) => {
    navigate(route);
  };
  return (
    <header className="header bg-[#CDE1FF]">
      <div className="header__inner flex max-w-[1750px] mx-auto justify-between items-center">
        <div className="header__logo cursor-pointer" onClick={() => clickLink("/")}>
          <img src={logo} alt="logo" />
        </div>
        <div className="header__content flex items-center py-[22px]">
          <div className="header__content-user mr-[25px]">
            Имя/роль пользователя
          </div>
          <div className="header__content-exit">
            <button className="header__content-btn py-[4px] px-[8px] bg-[#ffffff] rounded-[5px] hover:bg-[#86b6f8] duration-[200ms] ease-in-out">
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
