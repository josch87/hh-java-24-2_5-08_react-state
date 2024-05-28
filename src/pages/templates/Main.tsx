import styled from "styled-components";
import React from "react";

type MainProps = {
    children: React.ReactNode
}

const StyledMain = styled.main`
    margin: 2rem;
`

export default function Main({children}: MainProps) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}