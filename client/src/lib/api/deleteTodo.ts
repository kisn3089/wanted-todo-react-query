import { customAxios } from '../util/customAxios';

export const deleteTodoAPI = async (data: {
  id: string | undefined;
  token: string;
}) => {
  return await customAxios.delete(`/todos/${data.id}`, {
    headers: { Authorization: data.token },
  });
};
