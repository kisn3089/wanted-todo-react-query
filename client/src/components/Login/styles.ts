import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 1000px;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1.2px solid skyblue;
  border-radius: 10px;
`;

export const LoginTextContainer = styled.div`
  width: 100%;
  height: 70px;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.h2`
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

export const ValidMessage = styled.span<{ valid?: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: #cd2640;
  opacity: ${(props) => (props.valid ? "0" : "1")};
  transition: 0.3s ease-in-out;
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  background-color: skyblue;
  letter-spacing: 2px;
`;

export const GoToSignUp = styled.span`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;
