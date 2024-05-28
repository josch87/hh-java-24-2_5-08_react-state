import styled from "styled-components";
import React from "react";

type MainProps = {
    children?: React.ReactNode,
    title?: string,
}

const StyledMain = styled.main`
    margin: 2rem;
`

const StyledHeading = styled.h1`
    margin-bottom: 1.5rem;
`;

export default function Main({children, title}: MainProps) {
    return (
        <StyledMain>
            {title ? <StyledHeading>{title}</StyledHeading> : null}
            {children}
        </StyledMain>
    )
}