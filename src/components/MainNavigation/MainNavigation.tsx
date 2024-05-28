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

export default function MainNavigation() {
    return (
        <nav>
            <StyledUnorderedList>
                <StyledListItem><Link to={"/"}>Home</Link></StyledListItem>
                <StyledListItem><Link to={"/characters"}>Characters</Link></StyledListItem>
            </StyledUnorderedList>
        </nav>
    )
}