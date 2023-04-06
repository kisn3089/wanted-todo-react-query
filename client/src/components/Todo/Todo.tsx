import React, { useContext, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "../../hooks/useTodo";
import { deleteTodoAPI } from "../../lib/api/deleteTodo";
import { getTodoById } from "../../lib/api/getTodoById";
import AuthContext from "../../store/AuthContext";
import {
  FormContainer,
  DateHeader,
  TodoContainer,
  TitleContainer,
  ContentContainer,
  ButtonContainer,
  UpdateButton,
  DeleteButton,
} from "./styles";
import { calcDate } from "../../lib/util/calcDate";
import { updateTodo } from "../../lib/api/updateTodo";

const Todo = () => {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoValue, initTodo, todoChange } = useTodo();

  const { data: todo, isLoading } = useQuery("todo", () =>
    getTodoById(id, user.token)
  );

  const { mutate: deleteTodo } = useMutation(deleteTodoAPI, {
    onSuccess: (data) => {
      navigate(-1);
    },
  });
  const { mutate: updateTodos } = useMutation(updateTodo, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries("todo");
      console.log(data);
    },
  });

  useEffect(() => {
    if (!isLoading && todo) {
      initTodo({
        id: todo.data.data.id,
        title: todo.data.data.title,
        content: todo.data.data.content,
      });
    } else {
      console.log("데이터 조회 실패, suspense");
    }
  }, [isLoading]);

  return (
    <TodoContainer>
      <FormContainer>
        <DateHeader>{calcDate(todo?.data.data.updatedAt) || ""}</DateHeader>
        <TitleContainer
          type="text"
          id="title"
          value={todoValue.title}
          onChange={todoChange}
        />
        <ContentContainer
          id="content"
          value={todoValue.content}
          onChange={todoChange}
        />
        <ButtonContainer>
          <DeleteButton
            onClick={() => deleteTodo({ id: id, token: user.token })}
          >
            삭제 하기
          </DeleteButton>
          <UpdateButton
            onClick={() =>
              updateTodos({
                title: todoValue.title,
                content: todoValue.content,
                token: user.token,
                id: id,
              })
            }
          >
            수정 하기
          </UpdateButton>
        </ButtonContainer>
      </FormContainer>
    </TodoContainer>
  );
};

//

export default React.memo(Todo);
