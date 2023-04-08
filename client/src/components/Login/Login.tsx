import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LabelInput } from '../molcules/LabelInput/LabelInput';
import {
  Button,
  GoToSignUp,
  LoginContainer,
  LoginText,
  LoginTextContainer,
  ValidMessage,
} from './styles';

export interface ILogin {
  inputFocus: string;
  inputValue: { email: string; password: string };
  errorMessage: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focusHandler: (e: React.FocusEvent) => void;
  loginClick: (e: React.MouseEvent) => void;
  blurHandler?: (e: React.FocusEvent) => void;
  loginEnterKey?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Login = ({
  inputValue,
  inputFocus,
  errorMessage,
  changeValue,
  focusHandler,
  loginClick,
  blurHandler,
  loginEnterKey,
}: ILogin) => {
  const navigator = useNavigate();
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const disabledValid =
    inputValue.email.length > 5 &&
    inputValue.password.length > 5 &&
    inputValue.email.match(emailValidation)
      ? true
      : false;

  return (
    <LoginContainer>
      <LoginTextContainer>
        <LoginText>로그인</LoginText>
      </LoginTextContainer>
      <LabelInput
        id="email"
        value={inputValue.email}
        label="Email"
        type="text"
        isFocus={inputFocus === 'email'}
        isValue={inputValue.email.length !== 0}
        handleFocus={focusHandler}
        handleChange={changeValue}
        handleBlur={blurHandler}
        handleKeyDown={loginEnterKey}
      />
      <LabelInput
        id="password"
        value={inputValue.password}
        label="Password"
        type="password"
        isFocus={inputFocus === 'password'}
        isValue={inputValue.password.length !== 0}
        handleFocus={focusHandler}
        handleChange={changeValue}
        handleBlur={blurHandler}
        handleKeyDown={loginEnterKey}
      />
      <ValidMessage valid={errorMessage === ''}>{errorMessage}</ValidMessage>
      <Button onClick={loginClick} disabled={!disabledValid}>
        로그인
      </Button>
      <GoToSignUp onClick={() => navigator('/signup')}>
        회원가입하러 가기
      </GoToSignUp>
    </LoginContainer>
  );
};
