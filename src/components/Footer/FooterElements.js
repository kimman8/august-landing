import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #1b1947;
`;

export const FooterWrap = styled.div`
  padding: 56px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  max-width: 779px;

  @media screen and (max-width: 820px) {
    padding-top: 24px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin: 16px; */
  text-align: left;
  width: 185px;
  margin-right: -100px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 5px;
    width: 90px;
  }
`;
export const FooterLinkTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  /* margin-bottom: 16px; */
  &:hover {
    color: #9ebe53;
    transition: 0.3s ease-out;
    cursor: pointer;
  }
`;
export const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;
