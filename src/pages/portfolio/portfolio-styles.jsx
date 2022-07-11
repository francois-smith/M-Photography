import styled from "styled-components";

export const GalleryContainer = styled.div`
    padding: 25px 0px;
    width: 80%;
    position: relative;
    margin: auto;

    img{
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
    }
`;

export const PortfolioSection = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    
    a{
        text-decoration: none;
    }

    .portfolio-sections-container{
        width: 80%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .section-card{
        width: 450px;
        height: 300px;
        display: inline-block;
        background-color: ${props => props.theme.colors.rosegold};
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 25px;
        padding-top: 10px;

        span{
            transition: all 0.4s ease-out;
            opacity: 0;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.5em;
            color: ${props => props.theme.colors.offwhite};
            text-shadow: 2px 2px 3px ${props => props.theme.colors.darkgray};
            padding-left: 5px;
            z-index: 1;
            margin-top: 10px;
        }

        h2{
            padding-bottom: 0px;
            position: relative;
            z-index: 1;
            transition: all 0.25s ease-out;
            color: ${props => props.theme.colors.offwhite};
            font-size: 2em;
            text-shadow: 2px 2px 3px ${props => props.theme.colors.darkgray};
        }

        h2:after, h2:before {
            transition: all 0.25s ease-out 0.1s;
        }

        h2:after, h2:before {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: '';
            color: transparent;
            background: ${props => props.theme.colors.offwhite};
            text-shadow: 2px 2px 3px ${props => props.theme.colors.darkgray};
            height: 3px;
        }
    }

    .section-card-image{
        overflow: hidden;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: all 0.25s ease-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }

    .section-link:hover .section-card{
        h2{
            padding-bottom: 10px;
        }
        
        h2:after {
            width: 100%;
        }

        span{
            opacity: 1;
        }
    }

    .section-card-image img{
        object-position: top center;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.75);
    }

    @media ${props => props.theme.breakpoints.lg}{
        .portfolio-sections-container{
            width: 90%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .section-card{
            width: 350px;
            height: 240px;
        }
    }

    @media ${props => props.theme.breakpoints.sm}{
        .section-card{
            width: 90vw;
            height: 250px;

            h2{
                font-size: 1.5em;
                padding-bottom: 10px;
            }
            
            h2:after {
                width: 100%;
            }

            span{
                opacity: 1;
                font-size: 1.8em;
            }
        }
    }
`;

