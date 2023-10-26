import { ISignin } from "../models/main";
import { BASE_API_AUTH_URL, LOGIN_URL } from "../utils/const";
import { $host } from "./content";


export const signIn = async (username: string, password: string): Promise<ISignin> => {
    const { data } = await $host.post<ISignin>(BASE_API_AUTH_URL + LOGIN_URL, {
      username,
      password,
    });
    localStorage.setItem("token", data.token);
    return data;
  };