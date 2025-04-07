import styled from 'styled-components';

const StyledColumn = styled.div`
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    width: 33%;
    background-color: #EBECF0;
    margin-right: 20px;
    height: 90vh;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;
  
    h2 {
      margin: 0;
      padding: 0 16px;
      font-size: 20px;
    }
`;

export {
    StyledColumn
}