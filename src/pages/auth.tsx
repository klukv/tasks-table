import React from "react";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="auth max-w-[500px] mx-auto mt-[150px]">
      <div className="auth__inner rounded-[25px] bg-[#CDE1FF] px-[60px] pt-[70px] pb-[45px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <h1 className="auth__title text-[28px] text-center">Авторизация</h1>
        <div className="auth__text mb-[50px] mt-[3px] text-center">Заполните, чтобы войти</div>
        <div className="auth__info max-w-full">
          <div className="auth__info-email flex flex-col mb-[30px]">
            <label className="auth__info-email__title">Email</label>
            <input type="text" className="auth__info-email__text rounded-[5px] px-[5px] py-[2px] outline-none" />
          </div>
          <div className="auth__info-password flex flex-col mb-[70px]">
            <label className="auth__info-password__title">Пароль</label>
            <input type="password" className="auth__info-password__text rounded-[5px] px-[5px] py-[2px] outline-none" />
          </div>
          <div className="auth__info-button text-center mb-[15px]">
            <button className="auth__info-btn bg-[#93A8F4] px-[30px] py-[3px] rounded-[5px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer">Войти</button>
          </div>
          <div className="auth__info-link text-center text-[14px]">
            Нет аккаунта?
            <Link to={''} className="auth__info-link__text pl-[3px] text-[#010F58] hover:text-[#4d69f3] duration-[200ms] ease-in-out">Зарегистироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
