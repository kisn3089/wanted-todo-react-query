import { AxiosError, AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../lib/api/doLogin";

export const useLogin = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [inputFocus, setInputFocus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();
  const { mutate } = useMutation(doLogin, {
    onSuccess: (data: AxiosResponse) => {
      console.log(data.data.token);
      localStorage.setItem("token", data.data.token);
      navigator("/todos");
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        setErrorMessage("아이디와 비밀번호가 맞지 않습니다.");
      }
    },
  });

  const changeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target as HTMLInputElement;
      if (errorMessage !== "") {
        setErrorMessage("");
      }
      setInputValue((prev) => {
        return { ...prev, [e.target.id]: value };
      });
    },
    [inputValue]
  );

  const focusHandler = useCallback(
    (e: React.FocusEvent) => {
      const { id } = e.target;
      setInputFocus(id);
    },
    [inputFocus]
  );

  const loginClick = useCallback(() => {
    mutate({ email: inputValue.email, password: inputValue.password });
  }, [inputValue]);

  const blurHandler = useCallback(() => {
    setInputFocus("");
  }, [inputFocus]);

  return {
    inputFocus,
    inputValue,
    errorMessage,
    changeValue,
    focusHandler,
    loginClick,
    blurHandler,
  };
};
