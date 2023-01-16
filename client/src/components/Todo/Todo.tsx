import React, { useContext } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { useTodo } from '../../hooks/useTodo';
import { deleteTodoAPI } from '../../lib/api/deleteTodo';
import { getTodoById } from '../../lib/api/getTodoById';
import { calcDate } from '../../pages/TodoPage';
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
} from './styles';

const Todo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoValue } = useTodo();
  console.log(todoValue);

  const { data } = useQuery('todo', () => getTodoById(id, user.token), {
    onSuccess: (data) => console.log(data),
    onError: (error) => console.log(error),
  });

  const { mutate: deleteTodo } = useMutation(deleteTodoAPI, {
    onSuccess: (data) => {
      navigate(-1);
    },
  });

  return (
    <TodoContainer>
      <FormContainer>
        <DateHeader>{calcDate(data?.data.data.updatedAt) || ''}</DateHeader>
        <TitleContainer type="text" value={data?.data.data.title || ''} />
        <ContentContainer value={data?.data.data.content || ''} />
        <ButtonContainer>
          <DeleteButton
            onClick={() => deleteTodo({ id: id, token: user.token })}>
            삭제 하기
          </DeleteButton>
          <UpdateButton>수정 하기</UpdateButton>
        </ButtonContainer>
      </FormContainer>
    </TodoContainer>
  );
};

export default React.memo(Todo);
