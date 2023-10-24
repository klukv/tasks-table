import React from "react";
import arrow_down from "../assets/img/arrow_down.svg";
import plus_adding from "../assets/img/adding_idea.svg";

function Main() {

  return (
    <main className="ideas">
      <div className="cotainer max-w-[1750px] mx-auto">
        <h2 className="ideas__title mt-[20px] text-[20px] mb-[10px]">
          Список предложенных идей:
        </h2>
        <div className="ideas__buttons flex px-[42px] justify-between">
          <div className="ideas__buttons-filter flex">
            <button className="ideas__tags-btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] mr-[40px] hover:bg-[#acccff] duration-[200ms] ease-in-out">
              Теги{" "}
              <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
                <img src={arrow_down} className="w-full h-full" alt="arrow" />
              </span>
            </button>
            <button className="ideas__authors-btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] mr-[40px] hover:bg-[#acccff] duration-[200ms] ease-in-out">
              Авторы{" "}
              <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
                <img src={arrow_down} className="w-full h-full" alt="arrow" />
              </span>
            </button>
            <button className="ideas__status-btn relative rounded-[7px] border-[1px] border-solid border-[#B0C8ED] py-[5px] pl-[8px] pr-[42px] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] hover:bg-[#acccff] duration-[200ms] ease-in-out">
              Статус{" "}
              <span className="arrow absolute top-[14px] right-[12px] w-[18px] h-[9px]">
                <img src={arrow_down} className="w-full h-full" alt="arrow" />
              </span>
            </button>
          </div>
          <div className="ideas__buttons-add">
            <button className="ideas__adding-btn relative rounded-[7px] py-[8px] pr-[12px] pl-[45px] bg-[#E1EDFF] border-[1px] border-solid border-[#AABBF6] shadow-[0_1px_2px_1px_rgba(0,0,0,0.15)] hover:bg-[#95a9f1] duration-[200ms] ease-in-out">
              Добавить идею{" "}
              <span className="plus absolute top-[13px] left-[16px] w-[15px] h-[15px]">
                <img src={plus_adding} className="w-full h-full" alt="plus" />
              </span>
            </button>
          </div>
        </div>
        <div className="ideas__content mt-[32px] w-full">
          <table className="ideas__content-table w-full border-separate">
            <thead>
              <tr className="bg-[#E1EDFF] py-[10px] px-[15px] text-left border-t-[1px] border-solid first:border-l-[1px] first:border-[#93A8F4] last:border-l-[1px] last:border-[#93A8F4]">
                <th className="font-normal text-[18px] rounded-tl-lg">№</th>
                <th className="font-normal text-[18px]">Дата</th>
                <th className="font-normal text-[18px]">Теги</th>
                <th className="font-normal text-[18px]">Содержание</th>
                <th className="font-normal text-[18px]">Авторы</th>
                <th className="font-normal text-[18px]">Статус</th>
                <th className="font-normal text-[18px] rounded-tr-lg">Комментарий</th>
              </tr>
            </thead>
            <tbody>
              {Array(5)
                .fill(null)
                .map((row, index) => (
                  <tr key={index} className="first:border-l-[1px] first:border-[#93A8F4] last:border-l-[1px] last:border-[#93A8F4] even:bg-[#cbdfff]">
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                    <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Main;
