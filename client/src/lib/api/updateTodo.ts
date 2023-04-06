import { customAxios } from "../util/customAxios";

export const updateTodo = async (content: {
  title: string;
  content: string;
  token: string;
  id: string | undefined;
}) => {
  return await customAxios.put(
    `/todos/${content.id}`,
    {
      title: content.title,
      content: content.content,
    },
    { headers: { Authorization: content.token } }
  );
};
