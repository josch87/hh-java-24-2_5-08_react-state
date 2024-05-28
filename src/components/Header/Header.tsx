import styled from "styled-components";
import MainNavigation from "../MainNavigation/MainNavigation.tsx";

const StyledHeader = styled.header`
    height: 5rem;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;


export default function Header() {


    return (
        <StyledHeader>
            <h1>Rick & Morty</h1>
            <MainNavigation />
        </StyledHeader>
    )
}