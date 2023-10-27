import React, { useEffect } from "react";
import plus_adding from "../assets/img/adding_idea.svg";
import { useNavigate } from "react-router-dom";
import RowTable from "../components/rowTable";
import { useDispatch, useSelector } from "react-redux";
import { getAllIdeas } from "../services/content";
import { setIdeas } from "../redux/slices/ideaSlice";
import { RootState } from "../redux/store";
import { FormAuthor, FormStatus, FormTag } from "../components/forms";
import ModalEdit from "../components/modalEdit";

function Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state:RootState) => state.userSlice.user);
  const allIdeas = useSelector((state:RootState) => state.ideaSlice.ideasList);

  const clickLink = (route: string) => {
    navigate(route);
  };

  useEffect(() => {
    if (userInfo.id && userInfo.id !== 0) {
    }
    getAllIdeas().then((data) => {
      const newData = data.map((idea) => {
        idea.author.password = "Тут нет никакого пароля:)";
        return idea;
      });
      dispatch(setIdeas(newData));
    });
  }, [userInfo.id]);

  return (
    <>
    <main className="ideas">
      <div className="cotainer max-w-[1750px] mx-auto max-2xl:max-w-[1336px]">
        <h2 className="ideas__title mt-[20px] text-[20px] mb-[10px]">
          Список предложенных идей:
        </h2>
        <div className="ideas__buttons flex px-[42px] justify-between">
          <div className="ideas__buttons-filter flex">
            <div className="ideas__tags-block relative">
              <FormTag />
            </div>
            <div className="ideas__authors-block relative">
              <FormAuthor />
            </div>
            <div className="ideas__status-block relative">
              <FormStatus />
            </div>
          </div>
          <div className="ideas__buttons-add">
            <button
              className="ideas__adding-btn relative rounded-[7px] py-[8px] pr-[12px] pl-[45px] bg-[#E1EDFF] border-[1px] border-solid border-[#AABBF6] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] hover:bg-[#95a9f1] duration-[200ms] ease-in-out"
              onClick={() => clickLink("create-idea")}
            >
              Добавить идею{" "}
              <span className="plus absolute top-[13px] left-[16px] w-[15px] h-[15px]">
                <img src={plus_adding} className="w-full h-full" alt="plus" />
              </span>
            </button>
          </div>
        </div>
        <div className="ideas__content mt-[32px] w-full">
          <table className="ideas__content-table w-full border-separate bg-[#E1EDFF] rounded-[16px] overflow-hidden">
            <thead>
              <tr className="bg-[#93A8F4] text-left">
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  №
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Дата
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Теги
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Содержание
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Авторы
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Статус
                </th>
                <th className="font-normal py-[10px] px-[15px] text-[18px]">
                  Комментарий
                </th>
              </tr>
            </thead>
            <tbody>
              {allIdeas.map((idea, index) => (
                <RowTable key={idea.id} {...idea} sequenceNumber={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <ModalEdit/>
    </>
  );
}

export default Main;
