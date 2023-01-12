import { useEffect, useState } from "react";
import {
  MainText,
  HeaderContainer,
  NavContainer,
  NavListContainer,
  Links,
} from "./styles";

export const Header = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   console.log("useEffect");

  //   if (localStorage.getItem("token") === null) {
  //     setIsLogin(false);
  //   } else {
  //     setIsLogin(true);
  //   }
  // }, [localStorage.getItem("token")]);
  const token = localStorage.getItem("token") === null;
  return (
    <HeaderContainer>
      <MainText>TODO</MainText>
      <NavContainer>
        <NavListContainer>
          {token ? (
            <li>
              <Links to="/login">login</Links>
            </li>
          ) : (
            <li onClick={() => localStorage.removeItem("token")}>logout</li>
          )}

          <li>
            <Links to="/todos">Todos</Links>
          </li>
        </NavListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
