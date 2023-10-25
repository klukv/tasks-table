import axios from "axios";
import { API_URL, POST_IDEA_URL } from "../utils/const";
import { IIdea } from "../models/main";

const $host = axios.create({
  baseURL: API_URL,
});

export const createIdea = async (userId: string, idea: IIdea) => {
  const { data } = await $host.post(POST_IDEA_URL + "/" + userId, idea);
  return data;
};
