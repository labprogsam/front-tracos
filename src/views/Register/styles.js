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
  max-height: 1100px;
  overflow-y: scroll;
  margin: 20px 0;

  #subtitle-normal {
    margin-bottom: 0px;
    margin-top: 10px;
  }

  #subtitle-main {
    margin-top: 0;
    margin-bottom: 10px;
  }

  h1 {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.5%;
    margin: 0;
  }

  h2 {
    color: #333333;
    font-size: 18px;
    font-weight: 600;
  }

  #name {
    width: 100%;
    display: flex;
    justify-content: space-between;

    #first-name {
      margin-right: 15px;
      width: 100%;
    }

    #last-name {
      margin-left: 15px;
      width: 100%;
    }
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

    #entrar {
      background-color: #1e3a8a;
      color: #fff;
      border-radius: 8px;
      padding: 8px 0;
    }

    #cadastre {
      margin-top: 15px;
      background-color: transparent;
      border: 1px solid #b2b2b2;
      color: #4c4c4c;
    }

    a {
      cursor: pointer;
      text-decoration: underline;
      font-size: 14px;
      margin-top: 25px;
    }

    #register-button {
      width: 100%;
      margin-top: 0;
    }
  }
`;

const SugestionP = styled.p`
  font-size: 14px;
  margin-top: 0px;
`;

const ErrorSpan = styled.span`
  color: red;
  font-size: 11px;
  margin-bottom: 10px;
`;

export {
  MainContainer,
  ImageSide,
  FormSide,
  FormContainer,
  SugestionP,
  ErrorSpan,
};
