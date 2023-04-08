import { SignUp } from '../components/SignUp/SignUp';
import { useSignUp } from '../hooks/useSignUp';
import { CenterContainer } from '../styles/GlobalStyle';

export const SignUpPage = () => {
  const {
    formValue,
    errorMessage,
    isFocus,
    joined,
    changeValue,
    signUpClick,
    focusHandler,
    blurHandler,
    signUpEnter,
  } = useSignUp();

  return (
    <CenterContainer>
      <SignUp
        formValue={formValue}
        errorMessage={errorMessage}
        isFocus={isFocus}
        joined={joined}
        changeValue={changeValue}
        signUpClick={signUpClick}
        focusHandler={focusHandler}
        blurHandler={blurHandler}
        signUpEnter={signUpEnter}
      />
    </CenterContainer>
  );
};
