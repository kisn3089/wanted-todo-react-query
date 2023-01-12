import { customAxios } from "../util/customAxios";

export const getTodos = async () => {
  return await customAxios.get(`/todos`).then((res) => console.log(res));
};
