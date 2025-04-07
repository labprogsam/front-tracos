import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import LikedIcon from "@mui/icons-material/Favorite";
import UnlikedIcon from "@mui/icons-material/FavoriteBorder";
import UnreportedIcon from "@mui/icons-material/OutlinedFlag";
import { StyledComunityCard, StyledComunityImage } from "./styles";

const Card = ({ view = "home", card, handleClick, handleReport, handleLike }) => {
  return (
    <StyledComunityCard className={view}>
      <StyledComunityImage onClick={handleClick} src={card?.image} alt="Imagem da comunidade" />
      <div id="header-card-row">
        <div id="photo-name-card">
          <img id="user-photo" src={card?.userPhoto} alt="Imagem usuário" />
          <h2>{card?.name}</h2>
        </div>
        <IconButton onClick={() => handleLike()} color="error" aria-label="botão de curtida">
          {card?.liked ? (
            <LikedIcon />
          ) : (
            <UnlikedIcon />
          )}
        </IconButton>
      </div>
      <div id="footer-card-row">
        <div id="footer-tags">
          {card?.tags.map((item) => (
            <p id="tag" key={item}>{item}</p>
          ))}
        </div>
        <IconButton onClick={() => handleReport()} color="secondary.light" aria-label="botão de reportar">
          <UnreportedIcon />
        </IconButton>
      </div>
    </StyledComunityCard>
  );
};

export default Card;
