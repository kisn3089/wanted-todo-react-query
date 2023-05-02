import React from 'react';
import { DateText, TitleText, TodoItemContainer } from './styles';

// const week = ["일", "월", "화", "수", "목", "금", "토"];
interface ITodoItem {
  id?: string;
  date?: string;
  title?: string;
  todoClick?: (e: React.MouseEvent) => void;
  todoTitleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createTodo?: (e: React.MouseEvent) => void;
}

const TodoItem = ({
  id,
  date,
  title,
  todoClick,
  todoTitleChange,
  createTodo,
}: ITodoItem) => {
  // const day = week[new Date().getDay()];
  // const month = new Date().getMonth() + 1;
  // const today = new Date().getDate();

  return (
    <>
      <TodoItemContainer id={id} onClick={todoClick}>
        <DateText>{date}</DateText>
        <TitleText>{title}</TitleText>
      </TodoItemContainer>
    </>
  );
};

export default React.memo(TodoItem);
