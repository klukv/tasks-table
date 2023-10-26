import React from "react";
import { IAllIdeas } from "../models/main";

const RowTable: React.FC<IAllIdeas> = ({
  date,
  tags,
  text,
  author,
  state,
  comments,
  sequenceNumber,
}) => {
  return (
    <tr className="first:border-l-[1px] first:border-[#93A8F4] last:border-l-[1px] last:border-[#93A8F4] even:bg-[#cbdfff]">
      <td className="number text-left border-none py-[10px] px-[15px] align-top max-w-[100px] break-words">
        {sequenceNumber}
      </td>
      <td className="date text-left border-none py-[10px] px-[15px] align-top max-w-[100px] break-all">
        {date}
      </td>
      <td className="tags text-left border-none py-[10px] px-[15px] align-top max-w-[300px] break-all">
        {tags}
      </td>
      <td className="description text-left border-none py-[10px] px-[15px] align-top max-w-[550px] break-all">
        {text}
      </td>
      <td className="author text-left border-none py-[10px] px-[15px] align-top max-w-[250px] break-all">
        {author.username}
      </td>
      <td className="status text-left border-none py-[10px] px-[15px] align-top max-w-[250px] break-all">
        {state}
      </td>
      <td className="Comments text-left border-none py-[10px] px-[15px] align-top max-w-[500px] break-all">
        {comments}
      </td>
    </tr>
  );
};

export default RowTable;
