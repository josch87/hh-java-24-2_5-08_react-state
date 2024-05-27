import styled from "styled-components";

type ButtonProps = {
    status?: string,
}

export const StyledArticle = styled.article<ButtonProps>`
    width: 250px;
    min-height: 350px;
    border-width: 2px;
    border-style: solid;
    border-color: ${props => (
            props.status === "Alive" ?
                    "lightblue" :
                    props.status === "unknown" ?
                            "lightgreen" : "red"
    )};
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledCharacterImage = styled.img`
    border-radius: 50%;
`;

export const StyledCharacterName = styled.h2`
    text-align: center;
    margin-top: 10px;
`;