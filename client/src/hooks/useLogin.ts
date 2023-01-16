import { AxiosError, AxiosResponse } from "axios";
import React, { useCallback, useContext, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { doLoginAPI } from "../lib/api/doLogin";
import { EErrorCode } from "../lib/util/EErrorCode";
import AuthContext from "../store/AuthContext";

export const useLogin = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [inputFocus, setInputFocus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigator = useNavigate();
  const userCtx = useContext(AuthContext);

  const { mutate } = useMutation(doLoginAPI, {
    onSuccess: (data: AxiosResponse) => {
      userCtx.loginClick({ email: inputValue.email, token: data.data.token });
      localStorage.setItem("email", inputValue.email);
      localStorage.setItem("token", data.data.token);
      navigator("/todos");
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 400) {
        setErrorMessage(EErrorCode[error.response?.status]);
      }
    },
  });

  const changeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, id } = e.target as HTMLInputElement;
      if (errorMessage !== "") {
        setErrorMessage("");
      }
      setInputValue((prev) => {
        return { ...prev, [id]: value };
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
