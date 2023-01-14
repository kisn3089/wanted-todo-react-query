import { customAxios } from '../util/customAxios';

export const createTodoApi = async (
  content: { title: string; content: string },
  token: string
) => {
  return await customAxios.post(`/todos`, content, {
    headers: { Authorization: token },
  });
};
