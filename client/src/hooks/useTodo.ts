import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createTodoApI } from '../lib/api/createTodo';
import AuthContext from '../store/AuthContext';
import { updateTodo } from '../lib/api/updateTodo';
import { deleteTodoAPI } from '../lib/api/deleteTodo';

export const useTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isFixed, setIsFixed] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [todoValue, setTodoValue] = useState({
    id: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    const fix = setTimeout(() => {
      if (isFixed) {
        setIsFixed(false);
      }
    }, 3000);
    return () => clearTimeout(fix);
  }, [isFixed]);

  // Todo 생성 mutate
  const { mutate: createTodoMutate } = useMutation(createTodoApI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('todos');
    },
  });

  // Todo 업데이트 mutate
  const { mutate: updateTodos } = useMutation(updateTodo, {
    onSuccess: async () => {
      await queryClient.invalidateQueries('todo');
      if (!isFixed) setIsFixed(true);
    },
  });

  // Todo 삭제 mutate
  const { mutate: deleteTodo } = useMutation(deleteTodoAPI, {
    onSuccess: () => {
      navigate(-1);
    },
  });

  // Todo 생성 함수
  const createTodo = useCallback(
    (e: React.MouseEvent) => {
      createTodoMutate(
        {
          title: todoValue.title,
          content: todoValue.content,
          token: user.token,
        },
        {
          onSuccess: () => setTodoValue({ id: '', title: '', content: '' }),
        }
      );
    },
    [todoValue]
  );

  const updateClick = useCallback(
    (id: string | undefined) => {
      updateTodos({
        title: todoValue.title,
        content: todoValue.content,
        token: user.token,
        id: id,
      });
    },
    [todoValue]
  );

  // Todo 삭제 함수
  const deleteClick = useCallback(
    (id: string | undefined) => {
      deleteTodo({ id: id, token: user.token });
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

  const todoCtrlEnter = useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
      id: string | undefined
    ) => {
      if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && e.ctrlKey))
        updateTodos({
          title: todoValue.title,
          content: todoValue.content,
          token: user.token,
          id: id,
        });
    },
    [todoValue]
  );

  const createTodoEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && e.ctrlKey))
        createTodoMutate(
          {
            title: todoValue.title,
            content: todoValue.content,
            token: user.token,
          },
          {
            onSuccess: () => setTodoValue({ id: '', title: '', content: '' }),
          }
        );
    },
    [todoValue]
  );

  const isDeleteClick = useCallback(() => {
    setIsDelete((prev) => !prev);
  }, [isDelete]);

  return {
    todoValue,
    isFixed,
    isDelete,
    initTodo,
    todoClick,
    todoTitleChange,
    createTodo,
    updateTodos,
    deleteClick,
    updateClick,
    todoChange,
    todoCtrlEnter,
    createTodoEnter,
    isDeleteClick,
  };
};
