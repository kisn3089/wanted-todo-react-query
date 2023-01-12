import React from "react";
import {
  Button,
  LoginText,
  LoginTextContainer,
  ValidMessage,
} from "../Login/styles";
import { LabelInput } from "../molcules/LabelInput/LabelInput";
import { Container } from "./styles";

interface ISignUp {
  formValue: { email: string; password: string; passwordConfirm: string };
  errorMessage: string;
  isFocus: string;
  changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signUpClick: (e: React.MouseEvent) => void;
  focusHandler: (e: React.FocusEvent) => void;
  blurHandler: (e: React.FocusEvent) => void;
}

export const SignUp = ({
  formValue,
  errorMessage,
  isFocus,
  changeValue,
  signUpClick,
  focusHandler,
  blurHandler,
}: ISignUp) => {
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const disabledValid =
    formValue.email.length > 5 &&
    formValue.password.length > 5 &&
    formValue.passwordConfirm.length > 5 &&
    formValue.email.match(emailValidation)
      ? true
      : false;

  return (
    <Container>
      <LoginTextContainer>
        <LoginText>회원가입</LoginText>
      </LoginTextContainer>
      <LabelInput
        id="email"
        value={formValue.email}
        label="Email"
        type="text"
        isFocus={isFocus === "email"}
        isValue={formValue.email.length !== 0}
        handleFocus={focusHandler}
        handleChange={changeValue}
        handleBlur={blurHandler}
      />
      <LabelInput
        id="password"
        value={formValue.password}
        label="Password"
        type="password"
        isFocus={isFocus === "password"}
        isValue={formValue.password.length !== 0}
        handleFocus={focusHandler}
        handleChange={changeValue}
        handleBlur={blurHandler}
      />
      <LabelInput
        id="passwordConfirm"
        value={formValue.passwordConfirm}
        label="Password Confirm"
        type="password"
        isFocus={isFocus === "passwordConfirm"}
        isValue={formValue.passwordConfirm.length !== 0}
        handleFocus={focusHandler}
        handleChange={changeValue}
        handleBlur={blurHandler}
      />

      <ValidMessage valid={false}>{errorMessage}</ValidMessage>

      <Button onClick={signUpClick} disabled={!disabledValid}>
        회원가입
      </Button>
    </Container>
  );
};
