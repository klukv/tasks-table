import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

import arrow_down from "../../assets/img/arrow_down.svg";
import { stateDropdown } from "../../utils/const";
import { useDispatch } from "react-redux";
import { addTags, removeTags } from "../../redux/slices/filter";

function FormTag() {
  const dispatch = useDispatch();
  const refTagMenu = useRef<HTMLDivElement>(null);
  const [activePopup, setActivePopup] = useState(false);

  const changeTag = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameTag: string
  ) => {
    if (event.target.checked) {
      dispatch(addTags(nameTag));
    } else {
      dispatch(removeTags(nameTag));
    }
  };

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
            {stateDropdown.options.map((tag) => (
              <li
                key={tag.id}
                className="filter-tags__list-point flex items-center p-[5px] mb-[10px]"
              >
                <input
                  type="checkbox"
                  className="filter-tags__input"
                  onChange={(event) => changeTag(event, tag.name)}
                />
                <div className="filter-tags__info ml-[8px]">{tag.name}</div>
              </li>
            ))}
          </ul>
          <div className="filter-tags__button flex justify-center">
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormTag;
