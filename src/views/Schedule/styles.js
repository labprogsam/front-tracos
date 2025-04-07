import styled from 'styled-components';

const StyledColumns = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
        font-size: 20px;
    }
`;

const StyledModalContent = styled.div`
  padding: 32px;
  min-width: 700px;

  form {
    margin-top: 15px;
  }

  #minor-side {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  #referencias-visuais {
    margin: 10px 0;
  }

  .Mui-disabled {
    color: #333333 !important;
    -webkit-text-fill-color: #333333 !important;
  }

  #margin-right {
    margin-right: 10px;
    width: 100%;
  }
`;

const StyledModalTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #00213F;
  margin-bottom: 10px;
`;

const StyledModalText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #667A8C;
  margin-bottom: 10px;

  a {
    margin-left: 5px;
  }
`;

const StyledMultipleInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export {
    StyledColumns,
    MainContainer,
    StyledModalText,
    StyledModalTitle,
    StyledModalContent,
    StyledMultipleInputs
}