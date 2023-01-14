import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 35px;
  width: 380px;
  height: 50px;
  position: relative;
`;

export const Input = styled.input<{
  isFocus: boolean;
}>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0 10px;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  color: #fff;
  border: ${(props) =>
    props.isFocus ? '1.5px solid #CD2640' : '1.5px solid skyblue'};
  &:focus {
    outline: none;
  }
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff;
`;

export const Label = styled.label<{
  isValue: boolean;
}>`
  pointer-events: none;
  color: ${(props) => (props.isValue ? 'skyblue' : '#999')};
  font-size: ${(props) => (props.isValue ? '16px' : '20px')};
  font-weight: 500;
  transition: 0.3s ease-in-out;
  position: absolute;
  transform: ${(props) =>
    props.isValue
      ? 'translate3d(3px, -20px, 0)'
      : 'translate3d(10px, 15px, 0)'};
`;
