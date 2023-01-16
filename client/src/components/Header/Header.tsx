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
  const { user, logoutClick } = useContext(AuthContext);
  const email = user.email.split("@")[0];
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
            <Li onClick={logoutClick}>{email}</Li>
          )}

          <li>
            <Links to="/todos">Todo</Links>
          </li>
        </NavListContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
