import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import SideBar from '../Sidebar';
import { StyledBase, StyledMainCont, StyledBaseContainer } from './styles';

function Base({ children }) {
  const history = useHistory();

  return (
    <StyledMainCont>
      <SideBar />
      <StyledBaseContainer>
        <StyledBase>
          {children}
        </StyledBase>
      </StyledBaseContainer>
    </StyledMainCont>
  );
}

export default Base;