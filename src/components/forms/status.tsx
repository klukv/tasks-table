import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import arrow_down from "../../assets/img/arrow_down.svg";

function Status() {
  const refAuthorMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);
  const [radioState, setRadioState] = useState("1");

  //функция для переключения radio кнопок
  const changeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioState(event?.target.value);
  };

  //Кастомный хук для отслеживания клика в области выпадающего списка
  useClickOutside(refAuthorMenu, setActivePopup, activePopup);
  return (
    <div className="filter-status" ref={refAuthorMenu}>
      <button
        className="filter-status__btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] mr-[40px] hover:bg-[#acccff] duration-[200ms] ease-in-out"
        onClick={() => setActivePopup(!activePopup)}
      >
        Статус{" "}
        <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
          <img src={arrow_down} className="w-full h-full" alt="arrow" />
        </span>
      </button>
      <form
        className={
          !activePopup
            ? "filter-status__form absolute invisible opacity-0 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[200px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
            : "filter-status__form absolute visible opacity-1 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[200px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
        }
      >
        <div className="filter-status__inner p-[10px]">
          <ul className="filter-status__list">
            <li className="filter-status__list-point flex items-center p-[5px] mb-[10px]">
              <input
                type="radio"
                className="filter-status__input"
                checked={radioState === "1" ? true : false}
                onChange={(event) => changeRadio(event)}
                value="1"
              />
              <div className="filter-status__info ml-[8px]">Анализ</div>
            </li>
            <li className="filter-status__list-point flex items-center p-[5px] mb-[10px]">
              <input
                type="radio"
                className="filter-status__input"
                checked={radioState === "2" ? true : false}
                onChange={(event) => changeRadio(event)}
                value="2"
              />
              <div className="filter-status__info ml-[8px]">Принято</div>
            </li>
            <li className="filter-status__list-point flex items-center p-[5px] mb-[10px]">
              <input
                type="radio"
                className="filter-status__input"
                checked={radioState === "3" ? true : false}
                onChange={(event) => changeRadio(event)}
                value="3"
              />
              <div className="filter-status__info ml-[8px]">Отклонен</div>
            </li>
            <li className="filter-status__list-point flex items-center p-[5px] mb-[10px]">
              <input
                type="radio"
                className="filter-status__input"
                checked={radioState === "4" ? true : false}
                onChange={(event) => changeRadio(event)}
                value="4"
              />
              <div className="filter-status__info ml-[8px]">Отложен</div>
            </li>
          </ul>
          <div className="filter-status__button flex justify-center">
            <button className="filter-status__btn py-[8px] px-[20px] rounded-[10px] bg-[#80B6FF] hover:bg-[#5da2fc] duration-[200ms] ease-in-out">
              Применить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Status;
