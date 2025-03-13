import styled from 'styled-components';

export const StyledLoadingContent = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const StyledMainCont = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	box-sizing: border-box;
`;

export const StyledModalContent = styled.div`
  padding: 32px;
  max-width: 480px;

  form {
    margin-top: 15px;
  }
`;

export const StyledModalText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #667A8C;
  margin-bottom: 10px;

  a {
    margin-left: 5px;
  }
`;

export const StyledLinks = styled.div`
  margin: 10px 0;
  font-size: 13px;
  color: #667A8C;
  text-decoration: none;
`;

export const StyledBaseContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	width: calc(100% - 90px);
`;

export const StyledBase = styled.div`
	padding: 0 30px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	box-sizing: border-box;
`;