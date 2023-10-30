import { CHANGE_COMMENT, CHANGE_STATUS, DELETE_IDEA_URL, GET_ALL_IDEAS, POST_IDEA_URL } from "../utils/const";
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

export const changeComment = async (userId: number, comment: string) => {
  const { data } = await $authHost.post(CHANGE_COMMENT + `/${userId}?comment=${comment}`);
  return data;
}

export const changeStatus = async (userId: number, status: string) => {
  const { data } = await $authHost.post(CHANGE_STATUS + `/${userId}?state=${status}`);
  return data;
}

export const deleteIdea = async (userId: number) => {
  const { data } = await $authHost.delete(DELETE_IDEA_URL+ '/' + userId);
  return data;
}