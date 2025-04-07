import styled from 'styled-components';

export const StyledMainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const StyledSchedules = styled.div`
    background-color: #F7F7F7;
    border-radius: 13px;
    margin-bottom: 20px;
    padding: 20px;

    &.no-padding-top {
        padding-top: 0px;
    }

    #fixed {
        position: sticky;
        background-color: #F7F7F7;
        top: 0;
        padding: 30px 0;
        width: 100%;
        z-index: 100;
        margin: 0px;
    }

    #editar { 
        margin-right: 15px;
    }

    #buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        #gerenciar-portfolio {
            width: 100%;
        }
    }

    #schedule-background {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .schedule {
        width: 150px;
        margin-right: 20px;
    }

    #in-column {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 15px;
    }

    .schedule-title {
        font-size: 16px;
        margin-bottom: 10px;
    }

    .schedule-quantity {
        font-size: 20px;
        width: 100%;
        padding: 5px 0px;
        text-align: center;
        color: #FFF;
        border-radius: 8px;
        margin-top: 10px;

        &.green {
            background-color: #178B54;
        }

        &.yellow {
            background-color: #C4A02E;
        }

        &.grey {
            background-color: #6C757D;
        }
    }
`;

export const StyledLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-right: 3%;

    h1 {
        font-size: 20px;
    }
`;

export const StyledRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-height: 80vh;
    min-height: 900px;
    overflow-y: scroll;

    h1 {
        font-size: 20px;
    }
`;

export const StyledVisibility = styled.div`
    display: flex;
    flex-direction: row;

    #visibility-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-right: 25px;

        #visibility-icon {
            margin-right: 10px;
        }

        p {
            margin: 3px 0;
            font-size: 12px;
            font-weight: 600;
        }

        #visibility-reactions {
            font-weight: 400;
            font-size: 11px;
        }

        #visibility-date {
            font-size: 11px;
        }
    }
`;

export const StyledDestaques = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 10px;
    margin-top: 10px;

    h2 {
       font-size: 14px;
       font-weight: 600;
       margin-left: 12px;
    }

    p {
        font-size: 12px;
        margin-left: 12px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 0px;
    }
`;

export const StyledCardImage = styled.img`
    width: 100%;;
    height: 170px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
`;

export const StyledUpdates = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
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