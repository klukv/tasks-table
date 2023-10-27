import React, { useRef, useState } from "react";

import arrow_down from "../../assets/img/arrow_down.svg";
import useClickOutside from "../../hooks/useClickOutside";

function FormAuthor() {
  const refStatusMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);

  //Кастомный хук для отслеживания клика в области выпадающего списка
  useClickOutside(refStatusMenu, setActivePopup, activePopup);
  return (
    <div className="filter-author">
      <button
        className="ideas__authors-btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] mr-[40px] hover:bg-[#acccff] duration-[200ms] ease-in-out"
        onClick={() => setActivePopup(!activePopup)}
      >
        Авторы
        <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
          <img src={arrow_down} className="w-full h-full" alt="arrow" />
        </span>
      </button>
      <form
        className={
          !activePopup
            ? "filter-author__form absolute invisible opacity-0 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[300px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
            : "filter-author__form absolute visible opacity-1 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[300px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
        }
      >
        <div className="filter-author__inner py-[30px] px-[20px]">
          <div className="filter-author__search w-full">
            <input type="text" className="filter-author__search-input w-full p-[8px] outline-none rounded-[8px]" placeholder="Искать автора..." />
          </div>
          <div className="filter-author__button flex justify-center">
            <button className="filter-author__btn py-[8px] px-[20px] mt-[25px] rounded-[10px] bg-[#80B6FF] hover:bg-[#5da2fc] duration-[200ms] ease-in-out">
              Применить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAuthor;
