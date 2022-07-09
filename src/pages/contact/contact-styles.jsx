import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 25px 0px 60px;
    transform: translateX(25px);

    .form-container{
        width: 65%;
        padding: 40px 90px 40px 40px;
        background-color: ${props => props.theme.colors.rosegold};
        z-index: 9;
        position: relative;
        margin-top: 50px;
        margin-bottom: -50px;
        color: ${props => props.theme.colors.offwhite};
    }

    #name-input, #message-input, #email-input, #phone-input, #session-type-input {
        color: ${props => props.theme.colors.offwhite} !important;
    }

    .MuiInput-root::before{
        border-bottom: 1px solid #d8cfd0 !important;
    }
    
    #name-input-label, #message-input-label, #email-input-label, #phone-input-label, #session-type-input-label, .MuiSvgIcon-fontSizeMedium {
        color: ${props => props.theme.colors.offwhite} !important;
    }

    .form-container h2{
        font-size: 4em;
        font-family: "Tangerine";
    }

    .form-input{
        padding: 8px 0px;
    }

    .contact-input{
        display: flex;
        justify-content: space-between;
    }

    .contact-input > div{
        width: 49%;
    }

    .form-image{
        transform: translateX(-50px);
        width: 40%;
        max-height: 550px;
        height: auto;
        overflow: hidden;
        position: relative;
        z-index: 10;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }

    .form-image img{
        object-fit: cover;
        width: 100%;
        min-height: 100%;
    }
    
    @media ${props => props.theme.breakpoints.xl}{
        width: 80%;
    }

    @media ${props => props.theme.breakpoints.lg}{
        width: 90%;
    }
    
    @media ${props => props.theme.breakpoints.md}{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0px ;
        transform: translateX(0px);
        position: relative;
        padding: 25px 0px;

        .form-container{
            width: 100%;
            padding: 40px;
            margin: 0px;
        }

        .form-container h2{
            font-size: 3em;
        }

        .form-image{
            transform: translateX(0px);
            position: relative;
            width: 100%;
        }

        .form-image img{
            object-fit: cover;
            width: inherit;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        width: 90%;

        .form-container h2{
            font-size: 2em;
        }

        .contact-input{
            flex-direction: column;
            justify-content: baseline;
        }

        .contact-input div{
            width: 100%;
        }
    }
`;