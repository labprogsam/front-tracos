import React, { useState } from "react";
import Background from "../../assets/Profile/aquarela.png";
import Foto from "../../assets/Profile/tatuador-avatar.png";
import Tattoo1 from '../../assets/Schedule/old-school.jpg';
import Tattoo3 from '../../assets/Schedule/surrealista.jpg';
import Tattoo2 from '../../assets/Schedule/tatuagem-1.jpg';
import Chip from '@mui/material/Chip';
import Button from "@mui/material/Button";
import PhotoCameraBack from "@mui/icons-material/PhotoCameraBack";

import {
  MainContainer,
  PhotoContainer,
  RightContainer,
  Container,
  PictureContainer,
  ImageContainer,
  LeftContainer,
  Subtitle,
  Text,
  StyledCardImage,
  StyledCard,
  StyledDestaques,
  TagArea,
  StyledImageCarrousel
} from "./styles";

const Portfolio = () => {
  const [bio, setBio] = useState(
    "Sou tatuador apaixonado por transformar histórias em arte. Com um estilo único que mistura realismo, geométrico e desenhos personalizados, busco sempre criar tatuagens que sejam mais do que simples desenhos – são expressões da personalidade de cada cliente."
  );
  const [photo, setPhoto] = useState(Foto);
    const [tags, setTags] = useState(
      [
        {
          "id": 1,
          "name": "Realismo"
        },
        {
          "id": 2,
          "name": "Pontilhismo"
        },
        {
          "id": 3,
          "name": "Floral"
        },
        {
          "id": 4,
          "name": "Surrealismo"
        },
        {
          "id": 5,
          "name": "Tribal"
        },
        {
          "id": 6,
          "name": "Old School"
        },
        {
          "id": 7,
          "name": "Lettering"
        },
      ]
    )

  return (
    <MainContainer>
      <div id="perfil-row">
        <LeftContainer>
          <PhotoContainer>
            <PictureContainer src={Background} alt="background-image" />
            <ImageContainer src={photo} alt="user photo" />
            <Subtitle id="subtitle-photo">Samuel Miranda</Subtitle>
            <Text>{bio}</Text>
          </PhotoContainer>

          <Container>
            <h1>Tatuagens em destaque</h1>
            <StyledDestaques>
              <StyledCard>
                <StyledCardImage src={Tattoo1} alt="imagem do destaque" />
                <h2>Clássico Old School</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </StyledCard>
              <StyledCard>
                <StyledCardImage src={Tattoo2} alt="imagem do destaque" />
                <h2>Clássico Old School</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </StyledCard>
              <StyledCard>
                <StyledCardImage src={Tattoo3} alt="imagem do destaque" />
                <h2>Surrealismo pontilhado</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </StyledCard>
            </StyledDestaques>
          </Container>
          <Container>
            <Subtitle>Interesses</Subtitle>
            <TagArea>
              {tags.map((item) => (
                <Chip id="tag-chip" color="secondary.light"  label={item.name} />
              ))}
            </TagArea>
          </Container>
        </LeftContainer>
        <RightContainer>
          <Container className="overflow-images">
            <div id="add-image-container">
              <Subtitle>Galeria de Imagens</Subtitle>
              <Button color="primary" id="add-foto" variant="contained" fullWidth startIcon={<PhotoCameraBack />} >
                Adicionar Foto
              </Button>
            </div>
            <StyledImageCarrousel src={Tattoo1} />
            <StyledImageCarrousel src={Tattoo2} />
            <StyledImageCarrousel src={Tattoo3} />
            <StyledImageCarrousel src={Tattoo1} />
            <StyledImageCarrousel src={Tattoo2} />
            <StyledImageCarrousel src={Tattoo3} />
            <StyledImageCarrousel src={Tattoo1} />
            <StyledImageCarrousel src={Tattoo2} />
            <StyledImageCarrousel src={Tattoo1} />
          </Container>
        </RightContainer>
      </div>
    </MainContainer>
  );
};

export default Portfolio;
