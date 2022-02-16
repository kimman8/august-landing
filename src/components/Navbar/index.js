import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import Logo from '../../images/Logo.svg';
import { FaBars } from 'react-icons/fa';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          {/* <Nav> */}
          <NavbarContainer>
            <NavLogo>
              <img src={Logo} alt='lifecare logo' />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                // to='about'
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact='true'
                // offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                // to='discover'
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact='true'
                // offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                // to='services'
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact='true'
                // offset={-80}
                >
                  Team
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                // to='signup'
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact='true'
                // offset={-80}
                >
                  News
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                // to='signup'
                // smooth={true}
                // duration={500}
                // spy={true}
                // exact='true'
                // offset={-80}
                >
                  Contact
                </NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnLink to='/signin'>Book a session</NavBtnLink>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
