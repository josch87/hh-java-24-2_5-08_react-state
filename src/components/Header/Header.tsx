import styled from "styled-components";
import MainNavigation from "../MainNavigation/MainNavigation.tsx";
import {Link} from "react-router-dom";

const StyledHeader = styled.header`
    height: 5rem;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;


export default function Header() {


    return (
        <StyledHeader>
            <StyledLink to="/" title="Home"><h1>Rick & Morty</h1></StyledLink>
            <MainNavigation />
        </StyledHeader>
    )
}