import { customAxios } from "../util/customAxios";

export const createTodoApI = async (content: {
  title: string;
  content: string;
  token: string;
}) => {
  return await customAxios.post(
    `/todos`,
    { title: content.title, content: content.content },
    {
      headers: { Authorization: content.token },
    }
  );
};
