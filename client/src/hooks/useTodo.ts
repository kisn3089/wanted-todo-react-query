import React, { useCallback, useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { createTodoApi } from "../lib/api/createTodo";
import AuthContext from "../store/AuthContext";

export const useTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [todoValue, setTodoValue] = useState({
    title: "",
    content: "",
  });

  // Create Todo Mutate
  const { mutate: createTodoMutate } = useMutation(createTodoApi, {
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
          content: "되나?",
          token: user.token,
        },
        {
          onSuccess: () => setTodoValue({ title: "", content: "" }),
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

  const todoClick = useCallback((e: React.MouseEvent) => {
    const { id } = e.target as HTMLInputElement;
    navigate(`/todos/${id}`);
  }, []);

  return {
    todoValue,
    todoClick,
    todoTitleChange,
    createTodo,
  };
};
