import { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import {
  MainText,
  HeaderContainer,
  NavContainer,
  NavListContainer,
  Links,
  Li,
} from "./styles";

export const Header = () => {
  const { logoutClick } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  return (
    <HeaderContainer>
      <MainText>TODO</MainText>
      <NavContainer>
        <NavListContainer>
          {token === null ? (
            <li>
              <Links to="/login">login</Links>
            </li>
          ) : (
            <Li onClick={logoutClick}>logout</Li>
          )}

          <li>
            <Links to="/todos">Todo</Links>
          </li>
        </NavListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
