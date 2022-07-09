import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    padding-top: 50px;
    padding-bottom: 25px;
    width: 80%;
    transform: translateX(50px);

    .about-image-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 11;
        
    }

    #about-quote{
        font-size: 1.25rem;
        max-width: 350px;
        padding-top: 50px;
        pointer-events: none;
    }

    #about-image{
        max-width: 650px;
        width: 40vw;
        max-height: 80%;
        object-fit: cover;
        object-position: bottom center;
        pointer-events: none;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    .about-content-container{
        background-color: ${props => props.theme.colors.rosegold};
        color: ${props => props.theme.colors.offwhite};
        margin: 100px 0px 0px;
        transform: translateX(-100px);
        padding: 50px 50px 50px 150px;
        z-index: 10;
        font-size: 1.3rem;
    }

    .about-content-container p{
        padding: 8px 0px;
        pointer-events: none;
    }

    .quote-title{
        display: block;
        font-size: 3rem;
        padding-bottom: 25px;
    }

    @media ${props => props.theme.breakpoints.lg}{
        width: 100%;

        #about-quote{
            font-size: 1.2rem;
            max-width: 200px;
        }
    }
    @media ${props => props.theme.breakpoints.xl}{
        width: 90%;
    }

    @media ${props => props.theme.breakpoints.md}{
        flex-direction: column;
        transform: translateX(0px);

        #about-quote{
            font-size: 1.5rem;
            max-width: 70%;
        }

        .about-content-container{
            margin: 0px;
            transform: translateX(0px);
            padding: 50px;
            font-size: 1.3rem;
        }

        #about-image{
            width: 90%;
        }
    }

    @media ${props => props.theme.breakpoints.md}{
        padding-top: 10px;

        #about-image{
            width: 100%;
        }

        #about-quote{
            font-size: 1.2rem;
            max-width: 70%;
        }

        .quote-title{
            font-size: 2rem;
        }

        .about-content-container{
            padding: 30px;
            font-size: 1.2rem;
            margin-top: 50px;
        }
    }
`;