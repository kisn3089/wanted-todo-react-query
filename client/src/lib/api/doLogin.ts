import { customAxios } from "../util/customAxios";

export const doLogin = async (data: { email: string; password: string }) => {
  return await customAxios.post(`/users/login`, data);
};
