import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import { stateDropdown } from "../utils/const";
import { IDropdownSelectItem, IIdea } from "../models/main";

import close_btn from "../assets/img/close_btn.svg";
import { createIdea } from "../services/content";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Create_Task() {
  const navigate = useNavigate();
  const [tags, setTags] = useState("");
  const [tagDirty, setTagsDirty] = useState(false);
  const [title, setTitle] = useState("");
  const [titleDirty, setTitleDirty] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionDirty, setDescriptionDirty] = useState(false);
  const userInfo = useSelector((state: RootState) => state.userSlice.user);

  const clickLink = (route: string) => {
    navigate(route);
  };

  const changeInput = (str: string, type: string) => {
    type === "title" ? setTitle(str) : setDescription(str);
  };

  const onSelect = (selectedList: IDropdownSelectItem[]) => {
    const listToString = selectedList.map((tag) => tag.name).join(",");
    setTags(listToString);
  };

  // Проверка - вводил ли пользователь что-нибудь в поле
  const blurHandler = (event: any) => {
    switch (event.target.name) {
      case "search_name_input":
        setTagsDirty(true);
        break;
      case "title":
        setTitleDirty(true);
        break;
      case "description":
        setDescriptionDirty(true);
    }
  };

  // Отправка данных из формы в базу данных
  const submitInfoIdea = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!tags || !title || !description || !userInfo.id) {
      console.log("This is bad");
    } else {
      //формируем объект идеи
      const newIdea: IIdea = {
        date: new Date().toLocaleDateString("ru"),
        tags: tags,
        text: description,
        author: userInfo.username,
        state: "Анализ",
        comments: "Комментария нет",
      };
      //передаем данные в базу данных
      createIdea(newIdea).then((data) => clickLink("/"));
    }
  };

  return (
    <div className="modal max-w-[500px] mx-auto">
      <div className="modal__inner relative rounded-[15px] bg-[#CDE1FF] mt-[120px] p-[30px] shadow-[0_1px_4px_1px_rgba(0,0,0,0.3)]">
        <button
          className="modal__close-btn absolute w-[14px] h-[14px] top-[12px] right-[12px]"
          onClick={() => clickLink("/")}
        >
          <img src={close_btn} className="w-full h-full" alt="close" />
        </button>
        <h2 className="modal__title text-[24px] mb-[40px] text-center">
          Создание “Идеи”
        </h2>
        <form onSubmit={(event) => submitInfoIdea(event)}>
          <div className="modal__tags relative mb-[33px]">
            <span className="modal__tags-text absolute top-[6px] left-[7px] z-[1]">
              Теги:
            </span>
            {/* mb-[33px] pl-[48px] pr-[5px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[35px] */}
            <Multiselect
              options={stateDropdown.options}
              displayValue="name"
              placeholder=""
              onSelect={onSelect}
            />
            {!tags && tagDirty && (
              <div className="modal__error text-[red]">
                Заполните данное поле
              </div>
            )}
          </div>
          <div className="modal__head relative mb-[33px]">
            <span className="modal__head-text absolute top-[5px] left-[7px]">
              Заголовок:
            </span>
            <input
              type="text"
              className="modal__head-input w-full pl-[94px] pr-[5px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[35px]"
              name="title"
              value={title}
              onBlur={(event) => blurHandler(event)}
              onChange={(event) => changeInput(event.target.value, "title")}
            />
            {!title && titleDirty && (
              <div className="modal__error text-[red]">
                Заполните данное поле
              </div>
            )}
          </div>
          <div className="modal__description mb-[33px] ">
            <textarea
              className="modal__description-input w-full bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[5px] min-h-[100px] p-[8px]"
              name="description"
              onBlur={(event) => blurHandler(event)}
              value={description}
              placeholder="Напишите что нибудь..."
              onChange={(event) =>
                changeInput(event.target.value, "description")
              }
            />
            {!description && descriptionDirty && (
              <div className="modal__error text-[red]">
                Заполните данное поле
              </div>
            )}
          </div>
          <div className="modal__button flex justify-end relative">
            <button
              className="modal__button-btn bg-[#80B6FF] py-[6px] px-[15px] rounded-[6px] hover:bg-[#5778f1] duration-[200ms] ease-in-out cursor-pointer"
              type="submit"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create_Task;
