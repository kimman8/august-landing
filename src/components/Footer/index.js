import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Services</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Team</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>News</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Careers</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Privacy</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Disclaimer</FooterLinkTitle>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Looking for another clinic?</FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
