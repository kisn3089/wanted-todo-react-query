import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTodoById } from "../../lib/api/getTodoById";
import { calcDate } from "../../pages/TodoPage";
import AuthContext from "../../store/AuthContext";
import { TTodo } from "../../types/todo";
import {
  FormContainer,
  DateHeader,
  TodoContainer,
  TitleContainer,
  ContentContainer,
  ButtonContainer,
} from "./styles";

const Todo = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { data } = useQuery("todo", () => getTodoById(id, user.token), {
    onSuccess: (data) => console.log(data),
  });
  const todoData: TTodo = data?.data.data;

  return (
    <TodoContainer>
      <FormContainer>
        <DateHeader>{calcDate(todoData.updatedAt)}</DateHeader>
        <TitleContainer type="text" value={todoData.title} />
        <ContentContainer value={todoData.content} />
        <ButtonContainer></ButtonContainer>
      </FormContainer>
    </TodoContainer>
  );
};

export default React.memo(Todo);
