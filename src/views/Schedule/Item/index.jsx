import React, { useState } from 'react';
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import {
  StyledItem,
  ImageContainer
} from './styles';
import CalendarMonth from "@mui/icons-material/CalendarMonth"

const Card = ({card, handleClick}) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({
    id: card?.id || Math.floor(Math.random() * 1000)
  });

  const style = {
    margin: "10px",
    opacity: 1,
    color: "#333",
    background: "white",
    padding: "10px",
    transform: CSS.Transform.toString(transform)
  };

  return (
    <StyledItem onClick={handleClick} ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {card.reference && <ImageContainer src={card.reference} alt="Imagem referencia" />}
      <div id={card.id}>
        <h2>{card.name}</h2>
        <p id="age">{card.age} anos, {card.phone}</p>
        <p id="resume">
          {card.resume}
        </p>
        <div id="card-footer">
          <div id="calendar">
            <CalendarMonth id="calendar-icon" color="secondary.light" />
            <p>10/04/2025 18:30</p>
          </div>
          <img id="photo" alt="foto cliente" src={card.photo} />
        </div>
        <div></div>
      </div>
    </StyledItem>
  );
};

export default Card;
