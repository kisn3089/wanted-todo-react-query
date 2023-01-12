import { customAxios } from "../util/customAxios";

export const createUser = async (data: { email: string; password: string }) => {
  return await customAxios.post(`/users/create`, data);
};
