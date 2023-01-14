import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { useTodo } from '../hooks/useTodo';
import { CenterContainer } from '../styles/GlobalStyle';

export const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 100px;
`;

const dummy = [
  { date: '1.23', title: '카페 가기' },
  { date: '1.24', title: '아아 타기' },
  { date: '1.25', title: '작곡 하기' },
  { date: '1.26', title: '작곡 관련 유튜브 보기' },
  { date: '1.27', title: '인테리어 잡지 보기' },
];

export const TodoPage = () => {
  const { todoClick } = useTodo();
  return (
    <CenterContainer>
      <TodoContainer>
        {dummy.map((todo, i: number) => {
          return (
            <TodoItem
              key={i}
              id={String(i)}
              date={todo.date}
              title={todo.title}
              todoClick={todoClick}
            />
          );
        })}
      </TodoContainer>
    </CenterContainer>
  );
};
