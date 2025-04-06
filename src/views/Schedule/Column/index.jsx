import React from 'react';
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import Card from "../Item";
import {
  StyledColumn
} from './styles';

const Column = ({ id, title, cards, handleClick }) => {
  const { setNodeRef } = useDroppable({ id: id });
  return (
    <SortableContext id={id} items={cards} strategy={rectSortingStrategy}>
      <StyledColumn
        ref={setNodeRef}
      >
        <h2>
          {title}
        </h2>
        {cards.map((card) => (
          <Card handleClick={handleClick} key={card.id} card={card}></Card>
        ))}
      </StyledColumn>
    </SortableContext>
  );
};

export default Column;
