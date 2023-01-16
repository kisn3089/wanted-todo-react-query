import { customAxios } from "../util/customAxios";

export const getTodoById = async (id: string | undefined, token: string) => {
  return await customAxios.get(`/todos/${id}`, {
    headers: { Authorization: token },
  });
};
