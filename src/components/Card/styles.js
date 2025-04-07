import styled from 'styled-components';

export const StyledComunityCard = styled.div`
    display: flex;
    width: 230px;
    flex-direction: column;
    background-color: #FFF;

    &.home {
        @media (max-width: 1780px) {
            width: 280px;
        }
    
        @media (max-width: 1530px) {
            width: 250px;
        }
    
        @media (max-width: 1400px) {
            width: 240px;
        }
    
        @media (max-width: 1321px) {
            width: 100%;
        }
    }


    #header-card-row {
        margin-top: 15px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        #button-liked-image {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background-color: transparent;
        }

        #photo-name-card {
            display: flex;
            align-items: center;
            flex-direction: row;
        }

        h2 {
            font-size: 14px;
        }

        #user-photo {
            border-radius: 100%;
            width: 30px;
            margin: 0 15px;
        }
    }

    #footer-card-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;

        #footer-tags {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-left: 15px;

            #tag {
                padding: 2px 6px;
                background-color: #F5F5F5;
                font-size: 10px;
                margin-right: 10px;
                border-radius: 8px;
            }
        }
    }
`;

export const StyledComunityImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    cursor: pointer;
`;
