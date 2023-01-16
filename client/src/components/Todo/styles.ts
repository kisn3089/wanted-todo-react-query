import styled from 'styled-components';

export const TodoContainer = styled.main`
  padding: 0 30px;
`;

export const FormContainer = styled.section`
  width: 50%;
  height: calc(100vh - 250px);
  background-color: transparent;
  border: 1px solid skyblue;
  border-radius: 10px;
`;

export const DateHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: transparent;
  color: skyblue;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
`;

export const TitleContainer = styled.input`
  width: 100%;
  height: 60px;
  background-color: transparent;
  color: #fff;
  padding: 0 30px;
  font-size: 22px;
  font-weight: 700;
  border-bottom: 1px solid #333;
`;

export const ContentContainer = styled.textarea`
  width: 100%;
  height: calc(100vh - 470px);
  background-color: transparent;
  resize: none;
  color: #fff;
  padding: 20px 30px;
  font-size: 22px;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const UpdateButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: skyblue;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const DeleteButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #cd2640;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
`;
