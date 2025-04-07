import React, { useState } from "react";
import RoseIcon from '../../../assets/Home/rose.svg';
import RockIcon from '../../../assets/Home/rock.svg';
import Tattoo1 from '../../../assets/Schedule/old-school.jpg';
import Tattoo3 from '../../../assets/Schedule/surrealista.jpg';
import Tattoo2 from '../../../assets/Schedule/tatuagem-1.jpg';
import Client1 from "../../../assets/Schedule/bmo-min.png";
import Client2 from "../../../assets/Schedule/finn-min.png";
import Client3 from "../../../assets/Schedule/jake-min.png";
import Client4 from "../../../assets/Schedule/princess-min.png";
import ComunityCard from "../ComunityCard";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import UnreportedIcon from "@mui/icons-material/OutlinedFlag";
import IconButton from '@mui/material/IconButton';
import LikedIcon from "@mui/icons-material/Favorite";
import UnlikedIcon from "@mui/icons-material/FavoriteBorder";
import { 
  StyledMainContent,
  StyledSchedules,
  StyledLeft,
  StyledVisibility,
  StyledDestaques,
  StyledCard,
  StyledCardImage,
  StyledRight,
  StyledUpdates,
  StyledModal,
  StyledDialogImage,
  StyledDialogHeader,
  StyledDialogFooter

} from "./styles";

const Tatuador = () => {
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [comunityCards, setComunityCards] = useState(
    [
      {
        id: 1,
        name: "Juliana Serafim",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo1,
        userPhoto: Client1,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 150,
        liked: true
      },
      {
        id: 1,
        name: "Samuel Miranda",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo2,
        userPhoto: Client2,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 70,
        liked: false
      },
      {
        id: 1,
        name: "Yasmim Sales",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo2,
        userPhoto: Client3,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 15,
        liked: false
      },
      {
        id: 1,
        name: "José Luiz",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo3,
        userPhoto: Client4,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 20,
        liked: false
      },
      {
        id: 1,
        name: "Manoel Gomes",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo1,
        userPhoto: Client1,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 3,
        liked: true
      },
      {
        id: 1,
        name: "Maria Eduarda",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo2,
        userPhoto: Client2,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 60,
        liked: false
      },
      {
        id: 1,
        name: "Giovani Santos",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo1,
        userPhoto: Client3,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 150,
        liked: false
      },
      {
        id: 1,
        name: "Gabriel Pereira",
        tags: ["Geométrico", "Pontilhado"],
        image: Tattoo3,
        userPhoto: Client4,
        resume:  "Tô querendo fazer uma tattoo nova e achei seu trampo incrível, principalmente no estilo realismo, que é exatamente o que tô procurando. Queria ver contigo se rola de criar uma arte original baseada numa ideia que tive.",
        likes: 150,
        liked: false
      },
    ]
  )

  const handleClick = (index) => {
    setSelectedCard(index);
  }

  const handleClose = () => {
    setSelectedCard(undefined);
  }

  const handleLike = (index) => {
    const currentCard = comunityCards[index];
    let currentLikes = currentCard?.likes;
    if (currentCard?.liked) {
      currentLikes -= 1;
    } else {
      currentLikes += 1;
    }
    const updatedCard = {
      ...currentCard,
      liked: !currentCard?.liked,
      likes: currentLikes
    }

    const newArr = comunityCards;
    newArr[index] = updatedCard;

    setComunityCards([...newArr]);
  }

  return (
    <StyledMainContent>
      <StyledLeft>
        <StyledSchedules>
          <h1>Agendamentos</h1>
          <div id="schedule-background">
            <div className="schedule">
              <h2 className="schedule-title">Novo contato</h2>
              <p className="schedule-quantity grey">2</p>
            </div>
            <div className="schedule">
              <h2 className="schedule-title">Em contato</h2>
              <p className="schedule-quantity yellow">2</p>
            </div>
            <div className="schedule">
              <h2 className="schedule-title">Confirmados</h2>
              <p className="schedule-quantity green">0</p>
            </div>
          </div>
        </StyledSchedules>
        <StyledSchedules>
          <h1>Visibilidade</h1>
          <StyledVisibility>
            <div id="visibility-row">
              <img id="visibility-icon" src={RockIcon} alt="ícone de rock" />
              <div>
                <p>Seu trabalho mais favoritado</p>
                <p id="visibility-reactions">Surrealismo ampulheta com 35 reações</p>
              </div>
            </div>
            <div id="visibility-row">
              <img id="visibility-icon" src={RoseIcon} alt="ícone de rosa" />
              <div>
                <p>Seu último trabalho postado</p>
                <p id="visibility-reactions">Pontilhismo Rosa com 35 reações</p>
                <p id="visibility-date">31/03/2025</p>
              </div>
            </div>
          </StyledVisibility>
        </StyledSchedules>

        <StyledSchedules>
          <h1>Tatuagens em destaque</h1>
          <StyledDestaques>
            <StyledCard>
              <StyledCardImage src={Tattoo1} alt="imagem do destaque" />
              <h2>Clássico Old School</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </StyledCard>
            <StyledCard>
              <StyledCardImage src={Tattoo2} alt="imagem do destaque" />
              <h2>Clássico Old School</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </StyledCard>
            <StyledCard>
              <StyledCardImage src={Tattoo3} alt="imagem do destaque" />
              <h2>Surrealismo pontilhado</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </StyledCard>
          </StyledDestaques>
          <div id="buttons">
            <Button color="secondary.light" id="editar" variant="outlined" fullWidth>
              Editar Destaques
            </Button>
            <Link id="gerenciar-portfolio" to="app/portfolio">
              <Button color="secondary" variant="contained" fullWidth>
                Gerenciar Portfólio
              </Button>
            </Link>
          </div>
        </StyledSchedules>
      </StyledLeft>
      <StyledRight>
        <StyledSchedules className="no-padding-top">
          <h1 id="fixed">Atualizações da comunidade</h1>
          <StyledUpdates>
            {comunityCards.map((card, index) => (
              <ComunityCard key={card.index} card={card} handleLike={() => handleLike(index)} handleClick={() => handleClick(index)} handleReport={() => {}}/>
            ))}
          </StyledUpdates>
        </StyledSchedules>
      </StyledRight>
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
              <img id="user-photo" src={comunityCards[selectedCard]?.userPhoto} alt="Imagem usuário" />
              <div id="text-header">
                <h1>Arte feita por {comunityCards[selectedCard]?.name}</h1>
                <p>Postagem realizada no dia 03/04/2025</p>
              </div>
            </StyledDialogHeader>
            <StyledDialogImage src={comunityCards[selectedCard]?.image} alt="" />
            <StyledDialogFooter>
              <p id="resume">{comunityCards[selectedCard]?.resume}</p>
              <div id="actions">
                <div id="tags">
                  {selectedCard.tags?.map((item) => (
                    <p id="tag">{item}</p>
                  ))}
                </div>
                <div id="buttons">
                  <div id="likes">
                    <IconButton onClick={() => handleLike(selectedCard)} color="error" aria-label="botão de curtida">
                      {comunityCards[selectedCard]?.liked ? (
                        <LikedIcon />
                      ) : (
                        <UnlikedIcon />
                      )}
                    </IconButton>
                    <p>{comunityCards[selectedCard]?.likes}</p>
                  </div>
                  <IconButton onClick={() => {}} color="secondary.light" aria-label="botão de reportar">
                    <UnreportedIcon />
                  </IconButton>
                </div>
              </div>
            </StyledDialogFooter>
          </StyledModal>
        </Dialog>
      )}
    </StyledMainContent>)
};

export default Tatuador;
