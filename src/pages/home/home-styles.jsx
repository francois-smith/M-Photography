import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 100px 0px;

    #home-main-image{
        pointer-events: none;
        object-fit: cover;
        object-position: top center;
        height: auto;
        max-height: 1150px;
        width: 80%;
        max-width: 70em;
    }

    #home-side-image1{
        pointer-events: none;
        object-fit: cover;
        width: 30vw;
        max-width: 400px;
        position: absolute;
        left: 3%;
        top: 10%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    #home-side-image2{
        pointer-events: none;
        object-fit: cover;
        width: 50vw;
        max-width: 500px;
        position: absolute;
        right: 3%;
        top: 60%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; 
    }
    
    #quote{
        pointer-events: none;
        position: absolute;
        top: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: 0.1em;
        font-size: 1.2rem;
        color: ${props => props.theme.colors.rosegold};
    }

    @media ${props => props.theme.breakpoints.md}{
        padding: 80px 0px;

        #home-side-image1{
            width: 27.5vw;
            top: 8%;
        }
    }

    #home-side-image2{
        top: 65%;
    }
    

    @media ${props => props.theme.breakpoints.sm}{
        padding: 60px 0px;

        #quote{
            font-size: 1rem;
            top: 0px
        }
    }
`;