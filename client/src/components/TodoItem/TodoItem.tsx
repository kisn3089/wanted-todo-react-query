import React from 'react';
import { DateText, TitleText, TodoInput, TodoItemContainer } from './styles';

const week = ['일', '월', '화', '수', '목', '금', '토'];
interface ITodoItem {
  isEdit?: boolean;
  id?: string;
  date?: string;
  title?: string;
  todoClick?: (e: React.MouseEvent) => void;
}

const TodoItem = ({ isEdit, id, date, title, todoClick }: ITodoItem) => {
  // const day = week[new Date().getDay()];
  const month = new Date().getMonth() + 1;
  const today = new Date().getDate();

  console.log(month, today);

  return (
    <>
      {isEdit ? (
        <TodoItemContainer
          id={id}
          // onClick={todoClick}
        >
          <DateText>{`${month}.${today}`}</DateText>
          {/* <DateText>{day}</DateText> */}
          <TodoInput type="text" placeholder="해야할 일을 적어주세요.." />
          {/* <TitleText>할일을 입력해주세요.</TitleText> */}
        </TodoItemContainer>
      ) : (
        <TodoItemContainer id={id} onClick={todoClick}>
          <DateText>{date}</DateText>
          <TitleText>{title}</TitleText>
        </TodoItemContainer>
      )}
    </>
  );
};

export default React.memo(TodoItem);
