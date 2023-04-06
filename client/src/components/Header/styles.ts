import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  box-shadow: 0 0 8px 1px skyblue;
  padding: 0 100px;
  margin-bottom: 80px;
`;

export const MainText = styled.div`
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  background: linear-gradient(
    to right bottom,
    #87ceeb,
    #81aff0,
    #ab86d8,
    #d05299,
    #cd2640
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavContainer = styled.nav`
  /* background-color: #555; */
  width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const Links = styled(Link)`
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:link,
  :visited,
  :active {
    color: #fff;
  }
`;

export const Li = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  color: red;
  text-transform: uppercase;
`;
