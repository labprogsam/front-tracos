import React, { act, useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./data";
import logoIcon from '../../assets/Sidebar/logo.svg';
import logo2Icon from '../../assets/Sidebar/logo2.svg';
import logoutIcon from '../../assets/Sidebar/logout.svg';
import {
  StyledNavbar,
  StyledNavItems,
  StyledNavTitle,
  StyledLi,
  StyledContainer,
  StyledText,
  StyledFooter,
  StyledFooterText,
  StyledLogo
} from './styles';

const SideBar = () => {
  const [active, setActive] = useState(window.location.pathname);
  const [mouseEnter, setMouseEnter] = useState(false);

  const signOut = () => {

  }

  return (
    <>
      <StyledContainer>
        <StyledNavbar onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} expandNav={mouseEnter}>
          <StyledNavItems>
            <StyledNavTitle>
              <Link id="nav-logo" className={mouseEnter} to="/">
                <StyledLogo className={mouseEnter} id="logo" src={mouseEnter ? logoIcon : logo2Icon} alt="Logo Traços" />
              </Link>
            </StyledNavTitle>
            {SideBarData.map((item, index) => {
              return (
                <StyledLi key={index}>
                  <Link onClick={() => setActive(item.path)} to={item.path}>
                    <img id="sidebar-icon" src={active === item.path ? item.activeIcon : item.icon} />
                    {mouseEnter && <StyledText active={active === item.path} className={mouseEnter}>{item.title}</StyledText>}
                  </Link>
                </StyledLi>
              );
            })}
            <StyledLi id="logout-sidebar">
              <Link onClick={() => signOut()}>
                <img id="sidebar-icon" src={logoutIcon} />
                {mouseEnter && <StyledText className={mouseEnter}>Sair</StyledText>}
              </Link>
            </StyledLi>
            <StyledFooter >
              <StyledFooterText className={mouseEnter}>
                <p>Política de privacidade e dados</p>
                <div>
                  <p>Todos os direitos reservados</p>
                  <p id="no-margin-sidebar">TRAÇOS 2025</p>
                </div>
              </StyledFooterText>
            </StyledFooter>
          </StyledNavItems>
        </StyledNavbar>
      </StyledContainer>
    </>
  );
};

export default SideBar;