import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    font-size: 1em;

    footer{
        width: 80%;
        padding-bottom: 25px;
    }

    .footer-divider{
        width: 100%;
        height: 0.08em;
        margin: 25px 0px;
        background-color: ${props => props.theme.colors.darkgray};
    }

    .footer-content{
        display: flex;
        align-items: center;
    }

    .footer-content > div, .footer-content > p{
        width: calc(100%/3);
    }

    .socials-container{
        display: flex;
        justify-content: center;
    }

    .socials-container *{
        margin: 0px 15px;
    }

    #f-logo{
        width: 2em;
    }
    
    #copyright-notice{
        pointer-events: none;
    }

    .f-logo-container{
        display: flex;
        justify-content: flex-end;
    }

    @media ${props => props.theme.breakpoints.lg}{
        text-align: center;
        font-size: 0.9em;

        #copyright-notice{
            padding-bottom: 10px;
        }

        .footer-content{
            flex-direction: column;
        }

        .footer-content > div, .footer-content > p{
            width: 100%;
        }

        .socials-container *{
            margin: 0px 3px 10px;
        }

        .f-logo-container{
            justify-content: center;
        }
    }
`;