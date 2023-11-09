import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import arrow_down from "../../assets/img/arrow_down.svg";
import { useDispatch } from "react-redux";
import { statusList } from "../../utils/const";
import { addStatus } from "../../redux/slices/filter";

function Status() {
  const dispatch = useDispatch();
  const refAuthorMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);
  const [radioState, setRadioState] = useState("0");

  //функция для переключения radio кнопок
  const changeRadio = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameStatus: string
  ) => {
    setRadioState(event?.target.value);
    dispatch(addStatus(nameStatus));
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
            {statusList.map((status) => (
              <li
                key={status.id}
                className="filter-status__list-point flex items-center p-[5px] mb-[10px]"
              >
                <input
                  type="radio"
                  className="filter-status__input"
                  checked={radioState === status.id.toString() ? true : false}
                  onChange={(event) => changeRadio(event, status.name)}
                  value={status.id}
                />
                <div className="filter-status__info ml-[8px]">
                  {status.name}
                </div>
              </li>
            ))}
          </ul>
          <div className="filter-status__button flex justify-center">
          </div>
        </div>
      </form>
    </div>
  );
}

export default Status;
