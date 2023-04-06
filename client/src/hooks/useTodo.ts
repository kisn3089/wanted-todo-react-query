import React, { useCallback, useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createTodoApI } from "../lib/api/createTodo";
import AuthContext from "../store/AuthContext";

export const useTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [todoValue, setTodoValue] = useState({
    id: "",
    title: "",
    content: "",
  });

  // Create Todo Mutate
  const { mutate: createTodoMutate } = useMutation(createTodoApI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("todos");
    },
  });

  // Create Todo Fc
  const createTodo = useCallback(
    (e: React.MouseEvent) => {
      createTodoMutate(
        {
          title: todoValue.title,
          content: todoValue.content,
          token: user.token,
        },
        {
          onSuccess: () => setTodoValue({ id: "", title: "", content: "" }),
        }
      );
    },
    [todoValue]
  );

  const todoTitleChange = useCallback(
    (e: React.ChangeEvent) => {
      const { id, value } = e.target as HTMLInputElement;
      setTodoValue((prev) => {
        return {
          ...prev,
          [id]: value,
        };
      });
    },
    [todoValue]
  );

  const todoClick = useCallback(
    (e: React.MouseEvent) => {
      const { id } = e.target as HTMLInputElement;

      setTodoValue((prev) => {
        return {
          ...prev,
          id: id,
        };
      });
      navigate(`/todos/${id}`);
    },
    [todoValue]
  );

  const initTodo = useCallback(
    ({
      id,
      title,
      content,
    }: {
      id: string;
      title: string;
      content: string;
    }) => {
      setTodoValue({ id: id, title: title, content: content });
    },
    []
  );

  const todoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value, id } = e.target;
      setTodoValue({ ...todoValue, [id]: value });
    },
    [todoValue]
  );

  return {
    todoValue,
    initTodo,
    todoClick,
    todoTitleChange,
    createTodo,
    todoChange,
  };
};
