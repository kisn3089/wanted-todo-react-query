import styled, { keyframes } from "styled-components";

const hoverAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, 30px, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

const formAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(-60px, 0, 0);
    }
    100% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;

export const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 0 30px;
`;

export const TodoItemContainer = styled.div`
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 100px;
  border: 1px solid skyblue;
  border-radius: 5px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  animation: ${hoverAnimation} 0.5s ease-in-out;
  transition: 0.3s ease-in-out;
  opacity: 1;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 40%;
    background-color: skyblue;
    left: 30%;
  }
`;

export const DateText = styled.h3`
  pointer-events: none;
  font-size: 28px;
  font-weight: 700;
`;

export const TitleText = styled.span`
  pointer-events: none;
  margin-left: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
  font-weight: 500;
`;

export const TodoInput = styled.input`
  width: 200px;
  border-radius: 10px;
  margin-left: 70px;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: #fff;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #666;
  }
`;

export const FormContainer = styled.section`
  min-width: 350px;
  width: 350px;
  height: 700px;
  border: 1px solid skyblue;
  border-radius: 10px;
  background-color: transparent;
  animation: ${formAnimation} 0.5s ease-in-out;
`;

export const FormDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-weight: 700;
  background-color: transparent;
  border-radius: 10px 10px 0 0;
  color: skyblue;
  border-bottom: 1px solid skyblue;
`;

export const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #333;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  &::placeholder {
    text-align: center;
    color: #666;
  }
`;

export const FormContent = styled.textarea`
  width: 100%;
  height: 490px;
  background-color: transparent;
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  resize: none;
  padding: 20px 20px;
  &::placeholder {
    text-align: center;
  }
`;

export const FormButtonContainer = styled.div`
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
`;

export const FormButton = styled.button`
  width: 200px;
  height: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  background-color: skyblue;
  letter-spacing: 2px;
`;
