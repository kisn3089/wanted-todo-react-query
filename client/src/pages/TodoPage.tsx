import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import {
  FormButton,
  FormButtonContainer,
  FormContainer,
  FormContent,
  FormDate,
  FormHeader,
  FormInput,
  TodoContainer,
} from '../components/TodoItem/styles';
import TodoItem from '../components/TodoItem/TodoItem';
import { useTodo } from '../hooks/useTodo';
import { getTodosAPI } from '../lib/api/getTodos';
import AuthContext from '../store/AuthContext';
import { CenterContainer } from '../styles/GlobalStyle';
import { TTodo } from '../types/todo';
import { calcDate, calcToday } from '../lib/util/calcDate';

const TodoPage = () => {
  const { todoValue, todoClick, todoTitleChange, createTodo, createTodoEnter } =
    useTodo();
  const { user } = useContext(AuthContext);

  // Todo 불러오기
  const { data: todoArr } = useQuery('todos', () => getTodosAPI(user.token));

  const checkDisabled =
    todoValue.title.length !== 0 && todoValue.content.length !== 0;

  return (
    <CenterContainer>
      <FormContainer>
        <FormDate>{calcToday(new Date())}</FormDate>
        <FormHeader>
          <FormInput
            id="title"
            type="text"
            placeholder="제목"
            value={todoValue.title}
            onChange={todoTitleChange}
            onKeyDown={createTodoEnter}
          />
        </FormHeader>
        <FormContent
          id="content"
          placeholder="내용을 입력해주세요."
          value={todoValue.content}
          onChange={todoTitleChange}
          onKeyDown={createTodoEnter}
        />
        <FormButtonContainer>
          <FormButton onClick={createTodo} disabled={!checkDisabled}>
            저장
          </FormButton>
        </FormButtonContainer>
      </FormContainer>
      <TodoContainer>
        {todoArr?.data.data.map((todo: TTodo, i: number) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              date={calcDate(todo.updatedAt)}
              title={todo.title}
              todoClick={todoClick}
            />
          );
        })}
      </TodoContainer>
    </CenterContainer>
  );
};

export default React.memo(TodoPage);
