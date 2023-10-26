import React from "react";
import { IIdea } from "../models/main";

const Row_table:React.FC<IIdea> = ({ date, tags, text, state, comments}) => {
  return (
    <tr
      className="first:border-l-[1px] first:border-[#93A8F4] last:border-l-[1px] last:border-[#93A8F4] even:bg-[#cbdfff]"
    >
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
      <td className="text-left border-none py-[10px] px-[15px] align-top">1</td>
    </tr>
  );
}

export default Row_table;
