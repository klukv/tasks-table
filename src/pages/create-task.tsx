import React from "react";
import { useNavigate } from "react-router-dom";

import close_btn from "../assets/img/close_btn.svg";
import attach_btn from "../assets/img/attach_btn.svg";

function Create_Task() {
  const navigate = useNavigate();

  const clickLink = (route: string) => {
    navigate(route);
  };
  return (
    <div className="modal max-w-[500px] mx-auto">
      <div className="modal__inner relative rounded-[15px] bg-[#CDE1FF] mt-[120px] p-[30px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <button
          className="modal__close-btn absolute w-[14px] h-[14px] top-[12px] right-[12px]"
          onClick={() => clickLink('/')}
        >
          <img src={close_btn} className="w-full h-full" alt="close" />
        </button>
        <h2 className="modal__title text-[24px] mb-[40px] text-center">
          Создание “Идеи”
        </h2>
        <div className="modal__tags relative">
          <span className="modal__tags-text absolute top-[5px] left-[7px]">
            Теги:
          </span>
          <input
            type="text"
            className="modal__tags-input w-full mb-[33px] pl-[48px] pr-[5px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[35px]"
          />
        </div>
        <div className="modal__head relative">
          <span className="modal__head-text absolute top-[5px] left-[7px]">
            Заголовок:
          </span>
          <input
            type="text"
            className="modal__head-input w-full mb-[33px] pl-[94px] pr-[5px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[35px]"
          />
        </div>
        <div className="modal__description">
          <textarea
            className="modal__description-input w-full mb-[33px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[100px] p-[8px]"
            placeholder="Напишите что нибудь..."
          />
        </div>
        <div className="modal__button flex justify-end relative">
          <button className="modal__button-attach absolute top-[4px] left-0 w-[20px] h-[20px]">
            <img src={attach_btn} className="w-full h-full" alt="attach" />
          </button>
          <button className="modal__button-btn bg-[#80B6FF] py-[6px] px-[15px] rounded-[6px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create_Task;
