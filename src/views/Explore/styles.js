import styled from 'styled-components';

export const StyledMainContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    display: flex;
    flex-direction: row;
`;

export const StyledLeftContainer = styled.div`
    width: 70%;

    h1 {
        font-size: 20px;
        margin-top: 0px;
    }
`;

export const StyledMainGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;


export const StyledDialogImage = styled.img`
    width: 100%;
    max-width: 700px;
    object-fit: cover;
`;

export const StyledModal = styled.div`
    width: 500px;
`;

export const StyledDialogHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row
    align-items: center;
    padding: 20px 10px;

    #user-photo {
        border-radius: 100%;
        width: 40px;
        height: 40px;
        margin: 0 15px;
    }

    #text-header {
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 14px;
            margin: 0px;
        }

        p {
            font-size: 12px;
            margin: 0;
        }
    }
`;

export const StyledDialogFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    #resume {
        font-size: 14px;
        padding: 0 15px;
        width: 100%; 
    }

    #actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        padding-bottom: 15px;

        #tags {
            display: flex;
            flex-direction: row;
            margin-left: 15px;
        }
        
        #tag {
            padding: 2px 6px;
            background-color: #F5F5F5;
            font-size: 12px;
            margin-right: 10px;
            border-radius: 8px;
        }

        #buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-right: 20px;

            #likes {
                display: flex;
                align-items: center;
                flex-direction: row;
            }
        }
    }
`;

export const StyledRightContainer = styled.div`
    width: 30%;
`;

export const StyledTags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    height: 50px;
    overflow-x: hidden;
    overflow-y: hidden;

    #tag-chip {
        margin: 5px;
    }
`;

export const StyledFilterContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: 25%;
    max-width: 400px;
    min-width: 350px;
    height: 80vh;
    position: fixed;
    border-radius: 10px;
    right: 0;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(145,143,145,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(145,143,145,1);
    box-shadow: 0px 0px 5px 0px rgba(145,143,145,1);

    p {
        font-size: 11px;
    }

    h1 {
        font-size: 20px;
    }
`;

export const StyledTatuadorCard = styled.div`
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #cecece;
    border-radius: 10px;
    margin-bottom: 15px;

    #photo-container {
        display: flex;
        align-items: center;
        flex-direction: row;

        #tatuador-photo {
            width: 40px;
            border-radius: 100%;
            margin-right: 15px;
        }

        h3 {
            margin: 0;
            font-size: 14px;
        }

        p {
            margin: 0;
            font-size: 12px;
        }
    }
`;
