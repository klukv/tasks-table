import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import arrow_down from "../../assets/img/arrow_down.svg";
import { useDispatch } from "react-redux";
import { addAuthor } from "../../redux/slices/filter";

function FormAuthor() {
  const dispatch = useDispatch();
  const refStatusMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);
  const [name, setName] = useState("");

  //Кастомный хук для отслеживания клика в области выпадающего списка
  useClickOutside(refStatusMenu, setActivePopup, activePopup);

  const clickButtonAccept = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      dispatch(addAuthor(name));

  };
  return (
    <div className="filter-author" ref={refStatusMenu}>
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
        onSubmit={clickButtonAccept}
        className={
          !activePopup
            ? "filter-author__form absolute invisible opacity-0 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[300px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
            : "filter-author__form absolute visible opacity-1 duration-[200ms] ease-in-out top-[46px] left-[-50px] min-w-[300px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] rounded-[10px]"
        }
      >
        <div className="filter-author__inner py-[30px] px-[20px]">
          <div className="filter-author__search w-full">
            <input
              type="text"
              className="filter-author__search-input w-full p-[8px] outline-none rounded-[8px]"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Искать автора..."
            />
          </div>
          <div className="filter-author__button flex justify-center">
            <button
              className="filter-author__btn py-[8px] px-[20px] mt-[25px] rounded-[10px] bg-[#80B6FF] hover:bg-[#5da2fc] duration-[200ms] ease-in-out"
              type="submit"
            >
              Применить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAuthor;
