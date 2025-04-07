import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-items: flex-start;
    width: 100%;
    max-width: 1400px;
    padding-top: 10px;

    h1 {
        font-size: 20px;
    }

    #perfil-row {
        display: flex;
        width: 100%;
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
    padding-bottom: 30px;

    #new-upload {
        margin: 20px 15px 0 20px;
    }

    #save-photo {
        margin: 20px 15px 0 0px;
    }

    #subtitle-photo {
        margin-left: 20px;
        margin-bottom: 10px;
    }
`;

const Container = styled.div`
    margin-top: 20px;
    border-radius: 10px;
    width: 100%;
    background-color: #F7F7F7;
    padding: 20px;

    h1 {
        margin-top: 0px;
    }

    &.no-margin {
        margin-top: 0px;
    }

    &.overflow-images {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        height: 80vh;
        max-height: 800px;
        padding-top: 0px;
    }

    #add-image-container {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        position: sticky;
        top: 0;
        background-color: #F7F7F7;
        padding: 20px 0;
        
        #add-foto {
            width: 180px;
        }
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

const StyledDestaques = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 10px;
    margin-top: 10px;
    background-color: #FFF;
    padding-bottom: 15px;
    border-radius: 10px;

    h2 {
       font-size: 14px;
       font-weight: 600;
       margin-left: 12px;
    }

    p {
        font-size: 12px;
        margin: 0px 12px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 0px;
    }
`;

const StyledCardImage = styled.img`
    width: 100%;;
    height: 170px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
`;

const TagArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;

    #tag-chip {
        margin: 5px;
    }
`;

const StyledImageCarrousel = styled.img`
    object-fit: cover;
    height: 130px;
    margin-top: 20px;
`;

export {
    MainContainer,
    PhotoContainer,
    RightContainer,
    LeftContainer,
    Container,
    PictureContainer,
    ImageContainer,
    Subtitle,
    Text,
    StyledCardImage,
    StyledCard,
    StyledDestaques,
    TagArea,
    StyledImageCarrousel
}