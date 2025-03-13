import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./data";
import testeIcon from '../../assets/teste.png';
import {
  StyledNavbar,
  StyledNavItems,
  StyledNavTitle,
  StyledLi,
  StyledBottomItems,
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledInfos,
  StyledInfoEmail,
  StyledLogout
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
              <Link to="/">
                <img src={testeIcon} alt="Logo Traços" />
                {mouseEnter && <StyledTitle className={mouseEnter}>Traços</StyledTitle>}
              </Link>
            </StyledNavTitle>
            {SideBarData.map((item, index) => {
              return (
                <StyledLi key={index} active={active === item.path}>
                  <Link onClick={() => setActive(item.path)} to={item.path}>
                    <img src={active === index ? item.activeIcon : item.icon} />
                    {mouseEnter && <StyledText className={mouseEnter}>{item.title}</StyledText>}
                  </Link>
                </StyledLi>
              );
            })}
            <StyledBottomItems>
              <div className="no-redirect">
                <img src={testeIcon} />
                {mouseEnter &&
                  <StyledInfoEmail className={mouseEnter}>email@gmail</StyledInfoEmail>
                }
              </div>
            </StyledBottomItems>
            <StyledLogout expandNav={mouseEnter} onClick={() => signOut()}>
              <img src={testeIcon} alt="botão de logout" />
              {mouseEnter && <StyledText className={mouseEnter}>Logout</StyledText>}
            </StyledLogout>
          </StyledNavItems>
        </StyledNavbar>
      </StyledContainer>
    </>
  );
};

export default SideBar;