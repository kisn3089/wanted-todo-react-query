import React, { useCallback, useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { createTodoApi } from '../lib/api/createTodo';
import { getTodosAPI } from '../lib/api/getTodos';
import AuthContext from '../store/AuthContext';

export const useTodo = () => {
  const { user } = useContext(AuthContext);
  //
  const { data } = useQuery('todos', () => getTodosAPI(user.token), {
    onSuccess: (data) => console.log(data),
  });

  //   const {mutate} = useMutation(createTodoApi, {
  //     onSuccess: (data) => console.log(data)

  //   })

  const todoClick = useCallback((e: React.MouseEvent) => {
    const { id } = e.target as HTMLInputElement;
    console.log(id);
  }, []);
  return { todoClick };
};
