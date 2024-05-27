import {CharacterType} from "../../model/model.ts";
import {StyledArticle, StyledCharacterImage, StyledCharacterName} from "./CharacterCard.styled.tsx";

type Props = {
    character: CharacterType,
}

export default function CharacterCard({character}: Props) {
    return (
        <StyledArticle>
            <StyledCharacterImage src={character.image} alt={character.name} width={300} />
            <StyledCharacterName>{character.name}</StyledCharacterName>
            {character.status}
        </StyledArticle>
    )
}