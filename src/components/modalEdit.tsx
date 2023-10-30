import React, { useContext, useState } from "react";
import { PopupContext } from "../App";
import { TYPE_COMMENT, TYPE_STATUS, VARIANTS_STATUS } from "../utils/const";
import { changeComment, changeStatus } from "../services/content";

import closeBtn from "../assets/img/close_btn.svg";
import { useDispatch } from "react-redux";
import { setChangeComment, setChangeStatus } from "../redux/slices/ideaSlice";

function ModalEdit() {
  const dispatch = useDispatch();
  const contextPopup = useContext(PopupContext);
  const [changeContent, setChangeContent] = useState("");

  const postChangeInfo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contextPopup.typeModal === TYPE_STATUS && changeContent !== "") {
      let currentStatus = "";
      switch (changeContent) {
        case VARIANTS_STATUS.ANALYSIS:
          currentStatus = "Анализ";
          break;
        case VARIANTS_STATUS.ACCEPTED:
          currentStatus = "Принято";
          break;
        case VARIANTS_STATUS.CANCELED:
          currentStatus = "Отклонен";
          break;
        case VARIANTS_STATUS.POSTPONED:
          currentStatus = "Отложен";
          break;
      }
      //отправляем измененные данные в базу данных (бекенд)
      changeStatus(contextPopup.idSelectIdea, currentStatus).then((data) => {
        //говорим, что данные были отредактированы и таблицу нужно перерендерить
        dispatch(setChangeStatus(true));
        contextPopup.setActivePopup(!contextPopup.activePopup);
      });
    }else if(contextPopup.typeModal === TYPE_COMMENT && changeContent !== ""){
      //тоже самое, что и при изменении статуса
      changeComment(contextPopup.idSelectIdea, changeContent).then(data => {
        dispatch(setChangeComment(true));
        contextPopup.setActivePopup(!contextPopup.activePopup);
      })
    }
  };

  return (
    <div
      className={
        contextPopup.activePopup
          ? "modal__view fixed  h-[100vh] bg-black/50 top-0 bottom-0 left-0 right-0 visible opacity-1 z-[1000] duration-[100ms] ease-in-out flex justify-center items-center"
          : "modal__view fixed h-[100vh] bg-black/50 top-0 bottom-0 left-0 right-0 flex justify-center items-center invisible opacity-0 z-[-1] duration-[100ms] ease-in-out"
      }
      onClick={() => contextPopup.setActivePopup(!contextPopup.activePopup)}
    >
      <div
        className="modal-window relative w-[500px] bg-[#dde9fc] border-[1px] border-solid border-[#80B6FF] py-[20px] px-[15px] rounded-[8px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-window__inner">
          <button
            className="close__btn absolute w-[14px] h-[14px] top-[12px] right-[12px]"
            onClick={() =>
              contextPopup.setActivePopup(!contextPopup.activePopup)
            }
          >
            <img src={closeBtn} alt="close" />
          </button>
          <h2 className="modal-window__title text-center mb-[20px] text-[20px]">
            Редактирование данных
          </h2>
          <form className="modal-window__content" onSubmit={postChangeInfo}>
            {contextPopup.typeModal === TYPE_STATUS ? (
              <select
                name=""
                onChange={(event) => setChangeContent(event.target.value)}
                value={changeContent}
                className="modal-window__choice w-full p-[5px] rounded-[6px] outline-none"
              >
                <option
                  value="analysis"
                  className="modal-window__point py-[5px]"
                >
                  Анализ
                </option>
                <option
                  value="accepted"
                  className="modal-window__point py-[5px]"
                >
                  Принято
                </option>
                <option
                  value="canceled"
                  className="modal-window__point py-[5px]"
                >
                  Отклонен
                </option>
                <option
                  value="postponed"
                  className="modal-window__point py-[5px]"
                >
                  Отложен
                </option>
              </select>
            ) : (
              <div className="modal-window__comment">
                <textarea
                  className="modal-window__input w-full p-[8px] bg-[#E1EDFF] outline-none border-[1px] border-[#B0C8ED] rounded-[8px] min-h-[35px]"
                  onChange={(event) => setChangeContent(event.target.value)}
                  value={changeContent}
                  placeholder="Введите комментарий"
                ></textarea>
              </div>
            )}
            <div className="modal-window__button text-center">
              <button
                className="filter-author__btn py-[8px] px-[20px] mt-[25px] rounded-[10px] bg-[#80B6FF] hover:bg-[#5da2fc] duration-[200ms] ease-in-out"
                type="submit"
              >
                Применить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
