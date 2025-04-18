import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: #ffffff;
  height: 100vh;
  box-sizing: border-box;
  width: 100vw;
`;

const ImageSide = styled.div`
  background-color: #333333;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .image-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 50%;
    max-width: 560px;
  }
`;

const FormSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled.form`
  border: 1px solid #00000080;
  padding: 30px 50px;
  width: 80%;
  box-sizing: border-box;
  color: #000;
  max-width: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 7px;

  #subtitle-main {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
  }

  h1 {
    font-family: Montserrat;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -1.5%;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .MuiInputBase-root {
    font-family: "Montserrat", "sans-serif" !important;
    font-size: 16px !important;
    border-radius: 8px !important;
  }

  #actions {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    p {
      font-size: 14px;
    }

    #recuperar {
      background-color: #1e3a8a;
      color: #fff;
      border-radius: 8px;
      padding: 8px 0;
      margin-top: 70px;
    }

    a {
      cursor: pointer;
      text-decoration: underline;
      font-size: 14px;
      margin-top: 25px;
    }
  }
`;

const ErrorSpan = styled.span`
  margin: 0px;
  color: red;
  font-size: 11px;
`;

export { MainContainer, ImageSide, FormSide, FormContainer, ErrorSpan };
