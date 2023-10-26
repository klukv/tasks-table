import { GET_ALL_IDEAS, POST_IDEA_URL } from "../utils/const";
import { IAllIdeas, IIdea } from "../models/main";
import { $authHost } from "./authService";

export const createIdea = async (userId: number, idea: IIdea) => {
  const { data } = await $authHost.post(POST_IDEA_URL + "/" + userId, idea);
  return data;
};

export const getAllIdeas = async (): Promise<IAllIdeas[]> => {
  const { data } = await $authHost.get<IAllIdeas[]>(GET_ALL_IDEAS);
  return data;
};
