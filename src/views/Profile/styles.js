import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
    max-width: 1400px;

    h1 {
        font-size: 20px;
    }

    #perfil-row {
        display: flex;
        flex-direction: row;
    }
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-right: 40px;

    #gender-phone {
        display:flex;
        align-items: flex-end;
        justify-items: flex-end;
        flex-direction: row;
    }

    #full-button {
        margin-top: 10px;
    }

    #form-gender {
        margin-top: 16px;
        margin-bottom: 8px;
        margin-left: 10px;
    }

    #gender-select {
        padding: 8.5px 14px;
        padding-left: 0;
    }
`;

const PhotoContainer = styled.div`
    border-radius: 10px;
    background-color: #F7F7F7;
    padding-bottom: 20px;

    #new-upload {
        margin: 20px 15px 0 20px;
    }

    #save-photo {
        margin: 20px 15px 0 0px;
    }

    #subtitle-photo {
        margin-left: 20px;
    }
`;

const Container = styled.div`
    margin-top: 20px;
    border-radius: 10px;
    width: 100%;
    background-color: #F7F7F7;
    padding: 20px;

    &.no-margin {
        margin-top: 0px;
    }

`;

const PictureContainer = styled.img`
    object-fit: cover;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0 0;
`;

const ImageContainer = styled.img`
    object-fit: cover;
    border: 2px solid #FFF;
    width: 80px;
    height: 80px;
    border-radius: 40%;
    margin-left: 20px;
    margin-top: -50px;
`;

const Subtitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;

const Text = styled.p`
    font-size: 14px;
    margin: 0 0 0 20px;
`;

const InputContainer = styled.form`
    margin: 0 0px;
`;

const TagArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;

    #tag-chip {
        margin: 5px;
    }
`;

const Textarea = styled.textarea`
    border-radius: 8px;
    height: 120px;
    overflow-y: scroll;
    margin: 10px 0px 0 0px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #adadad;
    background-color: white;
    padding: 10px;
`;

const CertificationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    #validation {
        margin-top: 20px;
    }

    #cert-row {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

const WarningImage = styled.img`
    width: 70px;
    margin-right: 20px;
`;

export {
    MainContainer,
    PhotoContainer,
    RightContainer,
    LeftContainer,
    Container,
    PictureContainer,
    ImageContainer,
    InputContainer,
    Subtitle,
    Text,
    TagArea,
    Textarea,
    CertificationContainer,
    WarningImage
}