import React from 'react';
import {
  StyledModalTitle,
  StyledFeedbackContent,
  StyledModalText
} from './styles';
import Dialog from '@mui/material/Dialog';
import successIcon from '../../assets/teste.png';
import failIcon from '../../assets/teste.png';

function GlobalAlert({ title, open, type, text, close }) {
  
  const handleClick = () => {
    close();
  }

  return (
    <Dialog open={open}>
      <StyledFeedbackContent>
        <img src={type === 'success' ? successIcon : failIcon} />
        <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalText>
            {text}
          </StyledModalText>
          <button className="button-intregation" onClick={() => handleClick()}>
            Entendi
          </button>
      </StyledFeedbackContent>
    </Dialog>
  )
}

export default GlobalAlert;
