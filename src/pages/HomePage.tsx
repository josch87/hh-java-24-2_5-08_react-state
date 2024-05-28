import styled from "styled-components";

const StyledParagraph = styled.p`
    margin-top: 2rem;
    line-height: 2rem;
`;

export default function HomePage() {
    return (
        <Main>
            <h1>Welcome to Rick & Morty</h1>
            <StyledParagraph>
                Welcome to our Rick & Morty website! This is where science meets adventure and comedy. Discover the numerous and diverse characters that inhabit the multiverse, from our main characters Rick and Morty to the extraordinary creatures and residents of countless universes. Soon, you'll also be able to find comprehensive information on locations and other aspects of the show here. So, buckle up for a scientific, humorous, and chaotic adventure! "Wubba Lubba Dub Dub!"
            </StyledParagraph>
        </Main>
    )
}

import Main from "./templates/Main.tsx";
