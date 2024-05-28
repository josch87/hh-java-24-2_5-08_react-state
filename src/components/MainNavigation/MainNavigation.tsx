import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledUnorderedList = styled.ul`
    display: flex;
    gap: 10px;

`;

const StyledListItem = styled.li`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: inherit;
    background-color: white;
    text-decoration: none;
    border: 1px solid black;
    padding: 10px 20px;

    &:hover {
        background-color: #ecebeb;
    }
`;

export default function MainNavigation() {
    return (
        <nav>
            <StyledUnorderedList>
                <StyledListItem>
                    <StyledLink to="/">Home</StyledLink>
                </StyledListItem>
                <StyledListItem>
                    <StyledLink to="/characters">Characters</StyledLink>
                </StyledListItem>
            </StyledUnorderedList>
        </nav>
    )
}