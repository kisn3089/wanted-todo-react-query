import { Login } from '../components/Login/Login';
import { useLogin } from '../hooks/useLogin';
import { CenterContainer } from '../styles/GlobalStyle';

export const LoginPage = () => {
  const {
    inputFocus,
    inputValue,
    errorMessage,
    changeValue,
    focusHandler,
    loginClick,
    blurHandler,
  } = useLogin();
  return (
    <CenterContainer>
      <Login
        inputValue={inputValue}
        inputFocus={inputFocus}
        errorMessage={errorMessage}
        changeValue={changeValue}
        focusHandler={focusHandler}
        loginClick={loginClick}
        blurHandler={blurHandler}
      />
    </CenterContainer>
  );
};
