import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const StyledContainer = styled.div`
	min-width: 90px;
	height: 100vh;
	position: relative;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #00213F;
  min-width: ${(props) => props.expandNav ? '220px' : '90px'};
  max-width: ${(props) => props.expandNav ? '220px' : '90px'};
  transition: all .2s ease-in-out;
  height: 100vh;
  left: 0;
  z-index: 10;
  position: fixed;
  top: 0;
`;

export const StyledNavItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
	margin: 0px;
`;

export const StyledNavTitle = styled.div`
  margin: 40px 0px 60px 0px;
  text-decoration: none;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  flex-direction: row;
	height: 70px;

	a {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		text-decoration: none;
		width: 100%;
		color: #FFFFFF;
		margin-left: 30px;
	}

	img {
		width: 25px;
	}
`;

export const StyledTitle = styled.h1`
	font-size: 20px;
	white-space: nowrap;
	opacity: 0;
	margin: 0 0 0 20px;
	&.true {
		animation: ${animation2} 1s forwards;
	}
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: max-content;
  list-style: none;
  height: 60px;
  color: #727272;
  border-right: ${(props) => props.active ? '7px solid #CE152F' : 'none'};
  border-radius: 1px;

  a, .no-redirect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-weight: 500;
    border-radius: 4px;
	margin-left: 30px;
    color: ${(props) => props.active ? '#FFFFFF' : '#8295B6'};
  }

  a {
		:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
  }


	img {
		width: 25px;
	}
`;

export const StyledText = styled.p`
	opacity: 0;
	white-space: nowrap;
  margin: 0 0 0 20px;
	&.true {
		animation: ${animation2} 1s forwards;
	}
`;

export const StyledBottomItems = styled(StyledLi)`
  margin-top: auto;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 130px;
	margin-bottom: 20px;

	a {
		cursor: unset;

		:hover {
			background-color: rgba(255, 255, 255, 0.3);
		}
	}
`;

export const StyledInfoEmail = styled(StyledText)`
	opacity: 0;
	&.true {
		animation: ${animation2} 1s forwards;
	}
	font-size: 12px;
`;

export const StyledLogout = styled.button`
	width: 100%;
	border: none;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	color: #8295B6;
	font-size: 14px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	background-color: transparent;
	padding: 20px 0;

	img {
		width: 25px;
	}
`;