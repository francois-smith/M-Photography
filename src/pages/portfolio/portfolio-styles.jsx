import styled from "styled-components";

export const GalleryContainer = styled.div`
    padding: 25px 0px;
    width: 80%;
    margin: auto;
    display: block;
    min-height: 1px;
    overflow: auto;


    @media ${props => props.theme.breakpoints.md}{
        .ReactGridGallery_tile-viewport{
            width: 100% !important;
            height: 100% !important;
        }

        .ReactGridGallery_tile-viewport img{
            width: 100% !important;
            height: 100% !important;
        }
    }
`;

export const PortfolioSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    .portfolio-sections-container{
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .section-card{
        width: 20vw;
        height: 280px;
        display: inline-block;
        background-color: ${props => props.theme.colors.rosegold};
        position: relative;
        margin: 50px;
    }

    .section-card-image{
        
        overflow: hidden;
        transform: translateX(50px) translateY(50px);
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }

    .section-card-image img{
        object-position: top center;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

