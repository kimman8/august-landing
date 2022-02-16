import styled from 'styled-components';
// import { Link as LinkS } from 'react-scroll';
// import { Link as LinkR } from 'react-router-dom';
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#1B1947' : 'transparent')};
  height: 120px;
  margin-top: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media and screen (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1600px;
`;
export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 38px;
  justify-content: end;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 120px;
  margin-right: -30px;
`;

export const NavLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #9ebe53;
  }
  &:hover {
    border-bottom: 4px solid #9ebe53;
    transition: all 0.2s ease-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  color: #9ebe53;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #9ebe53;
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-size: 22px;
  outline: none;
  font-weight: normal;
  font-style: normal;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
