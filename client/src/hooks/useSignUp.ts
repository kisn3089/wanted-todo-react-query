import { AxiosError } from 'axios';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createUserAPI } from '../lib/api/createUser';
import { EErrorCode } from '../lib/util/EErrorCode';

export const useSignUp = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isFocus, setIsFocus] = useState('');
  const [joined, setJoined] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    '비밀번호를 6자 이상 입력해주세요.'
  );
  const { mutate } = useMutation(createUserAPI, {
    onSuccess: () => {
      setJoined(true);
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) {
        setErrorMessage(EErrorCode[error.response?.status]);
      }
    },
  });
  const navigator = useNavigate();

  const changeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, id } = e.target as HTMLInputElement;
      if (errorMessage !== '비밀번호를 6자 이상 입력해주세요.') {
        setErrorMessage('비밀번호를 6자 이상 입력해주세요.');
      }
      setFormValue((prev) => {
        return { ...prev, [id]: value };
      });
    },
    [formValue]
  );

  const signUpClick = useCallback(
    (e: React.MouseEvent) => {
      if (formValue.password !== formValue.passwordConfirm) {
        setErrorMessage('비밀번호가 같지 않습니다.');
      } else {
        mutate({ email: formValue.email, password: formValue.password });
      }
    },
    [formValue]
  );

  const focusHandler = useCallback((e: React.FocusEvent) => {
    const { id } = e.target;
    setIsFocus(id);
  }, []);

  const blurHandler = useCallback((e: React.FocusEvent) => {
    setIsFocus('');
  }, []);

  const signUpEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter')
        if (formValue.password !== formValue.passwordConfirm) {
          setErrorMessage('비밀번호가 같지 않습니다.');
        } else {
          mutate({ email: formValue.email, password: formValue.password });
        }
    },
    [formValue]
  );

  return {
    formValue,
    errorMessage,
    isFocus,
    joined,
    changeValue,
    signUpClick,
    focusHandler,
    blurHandler,
    signUpEnter,
  };
};
