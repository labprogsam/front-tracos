import React, { useState } from "react";
import Tattoo1 from "../../assets/Schedule/old-school.jpg";
import Tattoo3 from "../../assets/Schedule/surrealista.jpg";
import Tattoo2 from "../../assets/Schedule/tatuagem-1.jpg";
import Client1 from "../../assets/Schedule/bmo-min.png";
import Client2 from "../../assets/Schedule/finn-min.png";
import Client3 from "../../assets/Schedule/jake-min.png";
import Client4 from "../../assets/Schedule/princess-min.png";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import UnreportedIcon from "@mui/icons-material/OutlinedFlag";
import IconButton from "@mui/material/IconButton";
import LikedIcon from "@mui/icons-material/Favorite";
import UnlikedIcon from "@mui/icons-material/FavoriteBorder";
import { Card } from "../../components";
import {
  StyledMainContainer,
  StyledMainGrid,
  StyledLeftContainer,
  StyledRightContainer,
  StyledModal,
  StyledDialogImage,
  StyledDialogHeader,
  StyledDialogFooter,
  StyledTags,
  StyledFilterContainer,
  StyledTatuadorCard
} from "./styles";

const Explore = () => {
  const [gridCards, setGridCards] = useState([
    {
      id: 1,
      name: "Juliana Serafim",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo1,
      userPhoto: Client1,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 150,
      liked: true,
    },
    {
      id: 1,
      name: "Samuel Miranda",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo2,
      userPhoto: Client2,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 70,
      liked: false,
    },
    {
      id: 1,
      name: "Yasmim Sales",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo2,
      userPhoto: Client3,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 15,
      liked: false,
    },
    {
      id: 1,
      name: "José Luiz",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo3,
      userPhoto: Client4,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 20,
      liked: false,
    },
    {
      id: 1,
      name: "Manoel Gomes",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo1,
      userPhoto: Client1,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 3,
      liked: true,
    },
    {
      id: 1,
      name: "Maria Eduarda",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo2,
      userPhoto: Client2,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 60,
      liked: false,
    },
    {
      id: 1,
      name: "Giovani Santos",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo1,
      userPhoto: Client3,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 150,
      liked: false,
    },
    {
      id: 1,
      name: "Gabriel Pereira",
      tags: ["Geométrico", "Pontilhado"],
      image: Tattoo3,
      userPhoto: Client4,
      resume:
        "Lorem ipsum dolor sit amet. Aut placeat sequi qui omnis blanditiis nam similique esse! Ut galisum aliquam est molestias iure",
      likes: 150,
      liked: false,
    },
  ]);
  const [selectedCard, setSelectedCard] = useState();
  const [allTags, setAllTags] = useState([
    "Tatuadoras Mulheres",
    "Preto e Braco",
    "Aquarela",
    "Blackwork",
    "Tribal",
    "Pontilismo",
    "Realismo",
    "Geométrico",
    "Minimalista",
  ]);
  const [tatuadores, setTatuadores] = useState([
    {
      photo: Client1,
      name: "Samuel Miranda",
      id: 1,
      subtitle: "Lorem ipsum isao "
    },
    {
      photo: Client1,
      name: "Samuel Miranda",
      id: 1,
      subtitle: "Lorem ipsum isao "
    },
    {
      photo: Client1,
      name: "Samuel Miranda",
      id: 1,
      subtitle: "Lorem ipsum isao "
    },
  ]);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  const handleClose = () => {
    setSelectedCard(undefined);
  };

  const handleLike = (index) => {
    const currentCard = gridCards[index];
    let currentLikes = currentCard?.likes;
    if (currentCard?.liked) {
      currentLikes -= 1;
    } else {
      currentLikes += 1;
    }
    const updatedCard = {
      ...currentCard,
      liked: !currentCard?.liked,
      likes: currentLikes,
    };

    const newArr = gridCards;
    newArr[index] = updatedCard;

    setGridCards([...newArr]);
  };

  return (
    <StyledMainContainer>
      <StyledLeftContainer>
        <h1>Explorar</h1>
        <StyledTags>
          {allTags?.map((item) => (
            <Chip id="tag-chip" color="secondary.light" label={item} />
          ))}
        </StyledTags>
        <StyledMainGrid>
          {gridCards.map((card, index) => (
            <Card
              view="explore"
              key={card.index}
              card={card}
              handleLike={() => handleLike(index)}
              handleClick={() => handleClick(index)}
              handleReport={() => {}}
            />
          ))}
        </StyledMainGrid>
        {selectedCard !== undefined && (
          <Dialog
            fullWidth
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "500px",
                  maxWidth: "600px",
                },
              },
            }}
            id="card-dialog"
            open={selectedCard !== undefined}
            onClose={handleClose}
          >
            <StyledModal>
              <StyledDialogHeader>
                <img
                  id="user-photo"
                  src={gridCards[selectedCard]?.userPhoto}
                  alt="Imagem usuário"
                />
                <div id="text-header">
                  <h1>Arte feita por {gridCards[selectedCard]?.name}</h1>
                  <p>Postagem realizada no dia 03/04/2025</p>
                </div>
              </StyledDialogHeader>
              <StyledDialogImage src={gridCards[selectedCard]?.image} alt="" />
              <StyledDialogFooter>
                <p id="resume">{gridCards[selectedCard]?.resume}</p>
                <div id="actions">
                  <div id="tags">
                    {gridCards[selectedCard]?.tags?.map((item) => (
                      <p id="tag">{item}</p>
                    ))}
                  </div>
                  <div id="buttons">
                    <div id="likes">
                      <IconButton
                        onClick={() => handleLike(selectedCard)}
                        color="error"
                        aria-label="botão de curtida"
                      >
                        {gridCards[selectedCard]?.liked ? (
                          <LikedIcon />
                        ) : (
                          <UnlikedIcon />
                        )}
                      </IconButton>
                      <p>{gridCards[selectedCard]?.likes}</p>
                    </div>
                    <IconButton
                      onClick={() => {}}
                      color="secondary.light"
                      aria-label="botão de reportar"
                    >
                      <UnreportedIcon />
                    </IconButton>
                  </div>
                </div>
              </StyledDialogFooter>
            </StyledModal>
          </Dialog>
        )}
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledFilterContainer>
          <h1>Pesquisar</h1>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              border: "1px solid #EBEBEB"
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "pesquisar" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
          <p id="results">Resultados da pesquisa</p>
          {tatuadores?.map((item) => (
            <StyledTatuadorCard>
              <div id="photo-container">
                <img id="tatuador-photo" src={item?.photo} alt="foto do tatuador" />
                <div>
                  <h3>{item?.name}</h3>
                  <p>{item?.subtitle}</p>
                </div>
              </div>
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <ArrowForwardIos />
              </IconButton>
            </StyledTatuadorCard>
          ))}
        </StyledFilterContainer>
      </StyledRightContainer>
    </StyledMainContainer>
  );
};

export default Explore;
