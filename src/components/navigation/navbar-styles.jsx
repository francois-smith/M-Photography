import styled from "styled-components";

export const NavigationBar = styled.nav`
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.darkgray};
        font-size: 20px;
    }

    #main-logo{
        max-width: 600px;
        width: 75vw;
        z-index: 1050;
        position: relative;
    }

    .divider-container{
        width: 90%;
    }

    @media ${props => props.theme.breakpoints.xl}{
        #main-logo{
            max-width: 400px;
        }
        
    }
`;

export const NavigationContainer = styled.div`
    padding: 25px 0px 30px;

    .active-link, .active{
        color: ${props => props.theme.colors.rosegold} !important;
        z-index: 100;
        position: relative;
        pointer-events: none;
    }

    .active-link:after{
        width: 100% !important;
    }

    div{
        top: 0px
    }

    .bm-burger-button {
        display: none;
        position: fixed;
        width: 40px;
        height: 40px;
        right: 20px;
        top: 30px;
        z-index: 1100 !important;
        transition: all 0.4s;
    }

    .bm-burger-bars {
        background: ${props => props.theme.colors.darkgray};;
    }

    .bm-burger-bars-hover {
        background: ${props => props.theme.colors.rosegold};
    }

    .bm-cross-button {
        height: 40px;
        width: 40px;
        top: 20px !important;
        right: 20px !important;
    }

    .bm-cross-button:first-child span {
        top: 5px !important;
        right: 1px !important;
    }

    .bm-cross {
        height: 3px !important;
        width: 20px !important;
    }


    .bm-cross {
        background-color: ${props => props.theme.colors.darkgray};
    }

    .bm-menu-wrap {
        position: fixed;
        height: 100%;
    }

    .bm-menu {
        background: ${props => props.theme.colors.silver};
        padding: 2.5em 1.5em 0;
        font-size: 1.15em;
    }

    .bm-item-list {
        padding: 0.8em;
        padding-top: 25px;
    }

    .bm-item {
        display: inline-block;
        color: ${props => props.theme.colors.darkgray};
        text-decoration: none;
        text-align: center;
        padding: 15px 0px;
        border-bottom: 1px solid;
        border-top: 1px solid;
        margin-top: -1px;
        position: relative;
    }

    .section-arrow{
        top: 20px;
        position: absolute;
        right:  0px;
        height: 10px;
        width: 12px;
        transform-origin: center;
        transition: all 0.6s;
    }

    .nav-section-arrow{
        top: 17.5px;
        position: absolute;
        right: -10px;
        height: 12px;
        width: 15px;
        transform-origin: center;
        transition: all 0.6s;
    }

    .menu-item-sub-container{
        max-height: 53px;
        overflow: hidden;
        transition: max-height 0.4s linear 0s;
    }

    .menu-item-sub-container:hover{
        max-height: 110px;
        transition: max-height 0.4s linear 0s;
    }

    .menu-item-sub-container:hover .section-arrow{
        transform: rotate(90deg);
    }

    .menu-item-sub a{
        color: ${props => props.theme.colors.darkgray};
        text-decoration: none;
        font-size: 16px;
    }

    .menu-item-sub{
        padding-bottom: 6px !important;
    }

    .menu-sub-items{
        padding-top: 15px;
    }

    @media ${props => props.theme.breakpoints.md}{
        .bm-burger-button {
            display: block;
        }
    }
`;

export const MainLinks = styled.ul`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10em 40px;

    li{
        list-style: none;
    }

    .text-link{
        padding: 10px;
        position: relative;
    }

    .text-link, .text-link:after, .text-link:before {
        transition: all .4s;
    }

    .text-link:after, .text-link:before {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: ${props => props.theme.colors.rosegold};
        height: 1px;
    }

    .text-link:hover:after {
        width: 100%;
    }

    .text-link:hover {
        color: ${props => props.theme.colors.rosegold};
    }

    .navigation-sub-items{
        position: absolute;
        top: 40px;
        background-color: ${props => props.theme.colors.silver};
        z-index: 1;
        width: 100%;
        overflow: hidden;
        max-height: 0px;
        transition: all 0.5s;
    }

    .navigation-item-sub{
        margin: 10px;
        padding: 5px 0px;
    }

    .navigation-item-sub a{
        color: ${props => props.theme.colors.offwhite};
    }

    .navigation-menu{
        position: relative;
    }

    .portfolio-nav:hover + .navigation-sub-items{
        max-height: 450%;
        transition: all 0.6s linear 0.25s;
    }

    .navigation-sub-items:hover{
        max-height: 450%;
    }

    .portfolio-nav:hover .nav-section-arrow{
        transform: rotate(90deg);
        filter: invert(70%) sepia(10%) saturate(1541%) hue-rotate(306deg) brightness(81%) contrast(84%);
    }

    @media ${props => props.theme.breakpoints.xl}{
        padding: 25px 5em;
    }

    @media ${props => props.theme.breakpoints.md}{
        padding: 25px 1em;
        justify-content: flex-start;

        .active-link, .inactive-link, .navigation-menu, .divider-image-container{
            display: none;
        }
    }
`;