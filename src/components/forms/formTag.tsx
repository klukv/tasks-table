import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import arrow_down from "../../assets/img/arrow_down.svg";

function FormTag() {
  const refTagMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);

  //Кастомный хук для отслеживания клика в области выпадающего списка
  useClickOutside(refTagMenu, setActivePopup, activePopup);

  return (
    <div className="filter-tags" ref={refTagMenu}>
      <button
        className="filter-tags__btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] mr-[40px] hover:bg-[#acccff] duration-[200ms] ease-in-out"
        onClick={() => setActivePopup(!activePopup)}
      >
        Теги
        <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
          <img src={arrow_down} className="w-full h-full" alt="arrow" />
        </span>
      </button>
      <form
        className={
          !activePopup
            ? "filter-tags__form absolute invisible opacity-0 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[200px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
            : "filter-tags__form absolute visible opacity-1 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[200px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
        }
      >
        <div className="filter-tags__inner p-[10px]">
          <ul className="filter-tags__list">
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Анализ</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Дизайн</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Верстка</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Программирование</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Тестирование</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">SEO и наполнение</div>
            </li>
            <li className="filter-tags__list-point flex items-center p-[5px] mb-[10px]">
              <input type="checkbox" className="filter-tags__input" />
              <div className="filter-tags__info ml-[8px]">Запуск проекта</div>
            </li>
          </ul>
          <div className="filter-tags__button flex justify-center">
            <button className="filter-tags__btn py-[8px] px-[20px] rounded-[10px] bg-[#80B6FF] hover:bg-[#5da2fc] duration-[200ms] ease-in-out">
              Применить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormTag;
