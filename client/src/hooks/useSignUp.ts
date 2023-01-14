import { AxiosError, AxiosResponse } from 'axios';
import React, { useCallback, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../lib/api/createUser';
import { EErrorCode } from '../lib/util/EErrorCode';

export const useSignUp = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isFocus, setIsFocus] = useState('');
  const [errorMessage, setErrorMessage] = useState(
    '비밀번호를 6자 이상 입력해주세요.'
  );
  const { mutate } = useMutation(createUser, {
    onSuccess: (data) => {
      console.log(data);
      navigator('/todos');
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

  return {
    formValue,
    errorMessage,
    isFocus,
    changeValue,
    signUpClick,
    focusHandler,
    blurHandler,
  };
};
