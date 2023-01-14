import React from 'react';
import { DateText, TitleText, TodoItemContainer } from './styles';

interface ITodoItem {
  id: string;
  date: string;
  title: string;
  todoClick: (e: React.MouseEvent) => void;
}

export const TodoItem = ({ id, date, title, todoClick }: ITodoItem) => {
  return (
    <TodoItemContainer id={id} onClick={todoClick}>
      <DateText>{date}</DateText>
      <TitleText>{title}</TitleText>
    </TodoItemContainer>
  );
};
