import styled from 'styled-components';

const StyledItem = styled.div`
  background-color: #FFFFFF;
  border-radius: 9px;
  width: 100%;
  padding: 5px;
  padding-bottom: 15px;
  transition: background-color .8s ease-out;
  margin-top: 12px;
  -webkit-box-shadow: 0px 7px 5px 0px rgba(109,121,142,0.3);
  -moz-box-shadow: 0px 7px 5px 0px rgba(109,121,142,0.3);
  box-shadow: 0px 7px 5px 0px rgba(109,121,142,0.3);
  cursor: pointer;

  h2 {
    font-size: 15px;
    margin-top: 10px;
  }

  #age {
    margin-left: 15px;
    margin-top: 0px;
    font-size: 12px;
  }

  #resume {
    margin-left: 15px;
    overflow: hidden;
    font-size: 14px;
    width: 90%; 
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  #card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    #photo {
      border-radius: 100%;
      width: 40px;
      margin-right: 10px;
    }
  }

  #calendar {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 15px;

    #calendar-icon {
      fill: #6D798E;
    }

    p {
      margin-left: 8px;
      font-size: 12px;
    }
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
`;

export {
    StyledItem,
    ImageContainer,
}