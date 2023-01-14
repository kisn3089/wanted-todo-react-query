import { SignUp } from '../components/SignUp/SignUp';
import { useSignUp } from '../hooks/useSignUp';
import { CenterContainer } from '../styles/GlobalStyle';

export const SignUpPage = () => {
  const {
    formValue,
    errorMessage,
    isFocus,
    changeValue,
    signUpClick,
    focusHandler,
    blurHandler,
  } = useSignUp();

  return (
    <CenterContainer>
      <SignUp
        formValue={formValue}
        errorMessage={errorMessage}
        isFocus={isFocus}
        changeValue={changeValue}
        signUpClick={signUpClick}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
      />
    </CenterContainer>
  );
};
