import { useSelector } from "react-redux";
import { IAllIdeas } from "../models/main";
import { RootState } from "../redux/store";
import { TYPE_FILTERS } from "../utils/const";

const useFilter = (filterValue: string, typeFilter: string): IAllIdeas[] => {
  const initialData = useSelector((state: RootState) => state.ideaSlice.ideasList);
  let resultFilter: IAllIdeas[] = [];

  switch (typeFilter) {
    case TYPE_FILTERS.TYPE_TAGS:
      {
        const tagsList = filterValue.split(",");
        for (let i = 0; i < initialData.length; i++) {
          const isExist = tagsList.every((currentTag) =>
            initialData[i].tags.includes(currentTag)
          );
          if (isExist) {
            resultFilter.push(initialData[i]);
          }
        }
      }
      break;
    case TYPE_FILTERS.TYPE_AUTHOR:
      resultFilter = initialData.filter((currentData) =>
        currentData.author.username
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
      break;
    case TYPE_FILTERS.TYPE_STATUS:
      resultFilter = initialData.filter(
        (currentData) =>
          currentData.state.toLowerCase() === filterValue.toLowerCase()
      );
      break;
    default:
      resultFilter = initialData;
  }
  return resultFilter;
};

export default useFilter;
