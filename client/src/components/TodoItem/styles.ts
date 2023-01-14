import styled, { keyframes } from 'styled-components';

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
    content: '';
    position: absolute;
    width: 1px;
    height: 40%;
    background-color: skyblue;
    left: 25%;
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
