import { MOCK_API_BASE } from "../utils/const";
import { IAllIdeas, IIdea } from "../models/main";
import { $mockHost } from "./authService";

export const createIdea = async (idea: IIdea) => {
  const { data } = await $mockHost.post(MOCK_API_BASE, idea);
  return data;
};

export const getAllIdeas = async (urlFilter: string): Promise<IAllIdeas[]> => {
  const { data } = await $mockHost.get<IAllIdeas[]>(MOCK_API_BASE + urlFilter);
  return data;
};

export const changeComment = async (userId: number, comment: string) => {
  const { data } = await $mockHost.put(MOCK_API_BASE + "/" + userId, {
    comments: comment,
  });
  return data;
};

export const changeStatus = async (userId: number, status: string) => {
  const { data } = await $mockHost.put(MOCK_API_BASE + "/" + userId, {
    state: status,
  });
  return data;
};

export const deleteIdea = async (userId: number) => {
  const { data } = await $mockHost.delete(MOCK_API_BASE + "/" + userId);
  return data;
};
