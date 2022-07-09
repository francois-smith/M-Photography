import styled, { keyframes} from "styled-components";

export const NavigationBar = styled.nav`
    a{
        color: red;
        text-decoration: none;
        color: ${props => props.theme.colors.background2};
        font-size: 20px;
    }

    .active-link{
        color: ${props => props.theme.colors.primary};
    }

    img{
        width: 25em;
    }
`;

export const MainLinks = styled.ul`
    display: flex;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 25px 10em;

    li{
        list-style: none;
    }
`;