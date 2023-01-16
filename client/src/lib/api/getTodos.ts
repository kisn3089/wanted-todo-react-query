import { customAxios } from "../util/customAxios";

export const getTodosAPI = async (token: string) => {
  return await customAxios.get(`/todos`, { headers: { Authorization: token } });
};
