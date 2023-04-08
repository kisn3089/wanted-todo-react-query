import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';
import { getTodoById } from '../../lib/api/getTodoById';
import AuthContext from '../../store/AuthContext';
import {
  FormContainer,
  DateHeader,
  TodoContainer,
  TitleContainer,
  ContentContainer,
  ButtonContainer,
  UpdateButton,
  DeleteButton,
  FixedText,
  IsDeleteButton,
} from './styles';
import { calcDate } from '../../lib/util/calcDate';

const Todo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const {
    todoValue,
    isFixed,
    isDelete,
    initTodo,
    todoChange,
    updateClick,
    deleteClick,
    todoCtrlEnter,
    isDeleteClick,
  } = useTodo();

  const { data: todo } = useQuery('todo', () => getTodoById(id, user.token), {
    onSuccess: (data) =>
      initTodo({
        id: data.data.data.id,
        title: data.data.data.title,
        content: data.data.data.content,
      }),
  });

  return (
    <TodoContainer>
      <FixedText isFixed={isFixed}>수정되었습니다!</FixedText>
      <FormContainer>
        <DateHeader>{calcDate(todo?.data.data.updatedAt) || ''}</DateHeader>
        <TitleContainer
          type="text"
          id="title"
          value={todoValue.title}
          onChange={todoChange}
          onKeyDown={(e) => todoCtrlEnter(e, id)}
        />
        <ContentContainer
          id="content"
          value={todoValue.content}
          onChange={todoChange}
          onKeyDown={(e) => todoCtrlEnter(e, id)}
        />
        <ButtonContainer>
          <DeleteButton isDelete={isDelete} onClick={isDeleteClick}>
            {!isDelete ? '삭제 하기' : '취소'}
            {isDelete && (
              <IsDeleteButton onClick={() => deleteClick(id)}>
                정말 삭제하시겠습니끼?
              </IsDeleteButton>
            )}
          </DeleteButton>

          <UpdateButton onClick={() => updateClick(id)}>수정 하기</UpdateButton>
        </ButtonContainer>
      </FormContainer>
    </TodoContainer>
  );
};

export default React.memo(Todo);
