import {CharacterType} from "../../model/model.ts";
import {StyledArticle, StyledCharacterImage, StyledCharacterName} from "./CharacterCard.styled.tsx";

type Props = {
    character: CharacterType,
}

export default function CharacterCard({character}: Props) {


    return (
        <StyledArticle $status={character.status}>
            <StyledCharacterImage src={character.image} alt={character.name} draggable="false" />
            <StyledCharacterName>{character.name}</StyledCharacterName>
            {character.status}
            <span>
                {character.episode.length > 1 ? character.episode.length + " episodes" : character.episode.length + " episode"}
            </span>
        </StyledArticle>
    )
}