import React, { useContext } from "react";
import { IAllIdeas } from "../models/main";

import editBtn from "../assets/img/edit.svg";
import { PopupContext } from "../App";
import { ROLES, TYPE_COMMENT, TYPE_STATUS } from "../utils/const";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const RowTable: React.FC<IAllIdeas> = ({
  id,
  date,
  tags,
  text,
  author,
  state,
  comments,
  sequenceNumber,
}) => {
  const contextPopup = useContext(PopupContext);
  const userInfo = useSelector((state: RootState) => state.userSlice.user);

  const changeStatusModal = (type: string, value: boolean) => {
    //устанавливаем id идеи, которую пользователь хочет изменить
    contextPopup.setIdeaId(id);
    contextPopup.setTypeModal(type);
    contextPopup.setActivePopup(value);
  };

  return (
    <tr className="first:border-l-[1px] first:border-[#93A8F4] last:border-l-[1px] last:border-[#93A8F4] even:bg-[#cbdfff]">
      <td className="number text-left border-none py-[10px] px-[15px] align-top max-w-[100px] break-words">
        {sequenceNumber}
      </td>
      <td className="date text-left border-none py-[10px] px-[15px] align-top w-[150px] break-all">
        {date}
      </td>
      <td className="tags text-left border-none py-[10px] px-[15px] align-top w-[250px] break-all">
        {tags}
      </td>
      <td className="description text-left border-none py-[10px] px-[15px] align-top w-[550px] break-all">
        {text}
      </td>
      <td className="author text-left border-none py-[10px] px-[15px] align-top w-[150px] break-all">
        {author.username}
      </td>
      <td className="status relative text-left border-none py-[10px] px-[15px] align-top w-[150px] break-all">
        {state}
        {userInfo.roles === ROLES.ROLE_BOSS && (
          <div className="status__button-edit absolute top-[14px] right-[9px]">
            <button
              className="status__btn-edit w-[18px] h-[18px]"
              onClick={() =>
                changeStatusModal(TYPE_STATUS, !contextPopup.activePopup)
              }
            >
              <img src={editBtn} className="w-full h-full" alt="edit" />
            </button>
          </div>
        )}
      </td>
      <td className="Comments relative text-left border-none py-[10px] px-[15px] align-top max-w-[500px] break-all">
        {comments}
        {userInfo.roles === ROLES.ROLE_EXPERT && (
          <div className="status__button-edit absolute top-[14px] right-[9px]">
            <button
              className="status__btn-edit w-[18px] h-[18px]"
              onClick={() =>
                changeStatusModal(TYPE_COMMENT, !contextPopup.activePopup)
              }
            >
              <img src={editBtn} className="w-full h-full" alt="edit" />
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default RowTable;
